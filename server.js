import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { schema } from './schema.js';
import { getAuthContext } from './middleware/auth.js';
import { MONGO_URL, PORT } from './utils/constants.js';
dotenv.config();
const simpleErrorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: err.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};
const notFoundHandler = (req, res) => {
    res.status(404).json({
        success: false,
        message: `Resource not found - ${req.originalUrl}`
    });
};
async function connectToDatabase() {
    try {
        if (!MONGO_URL) {
            throw new Error('MongoDB connection string is not defined. Ensure MONGO_URL is set in the environment.');
        }
        await mongoose.connect(MONGO_URL);
        console.log('✅ Connected to MongoDB successfully');
        mongoose.connection.on('error', (err) => {
            console.error('❌ MongoDB connection error:', err);
        });
        mongoose.connection.on('disconnected', () => {
            console.warn('⚠️ MongoDB disconnected');
        });
        process.on('SIGINT', async () => {
            await mongoose.connection.close();
            console.log('MongoDB connection closed due to app termination');
            process.exit(0);
        });
        return true;
    }
    catch (error) {
        console.error('❌ Failed to connect to MongoDB:', error);
        return false;
    }
}
async function initServer() {
    const dbConnected = await connectToDatabase();
    if (!dbConnected) {
        console.warn('⚠️ MongoDB connection failed, but continuing to start server...');
    }
    const app = express();
    const corsOptions = {
        origin: (origin, callback) => {
            callback(null, origin || '*');
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
        exposedHeaders: ['Content-Length', 'X-JSON'],
        maxAge: 86400,
        preflightContinue: false,
        optionsSuccessStatus: 204
    };
    app.use(cors(corsOptions));
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS,PATCH');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
        if (req.method === 'OPTIONS') {
            return res.sendStatus(204);
        }
        next();
    });
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use((req, res, next) => {
        console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
        next();
    });
    const apolloServer = new ApolloServer({
        schema,
        formatError: (error) => {
            console.error('GraphQL Error:', error);
            return {
                message: error.message,
                path: error.path,
                extensions: {
                    code: error.extensions?.code || 'INTERNAL_SERVER_ERROR',
                    ...(process.env.NODE_ENV === 'development' && { stacktrace: error.extensions?.stacktrace })
                }
            };
        }
    });
    await apolloServer.start();
    app.use('/graphql', expressMiddleware(apolloServer, {
        context: async ({ req }) => {
            const authHeader = req.headers.authorization || '';
            try {
                const authContext = await getAuthContext(authHeader);
                return {
                    ...authContext,
                    req
                };
            }
            catch (error) {
                return {
                    isAuthenticated: false,
                    authError: error.message,
                    req
                };
            }
        }
    }));
    app.get('/', (req, res) => {
        res.send(`CryptoVault API - Running`);
    });
    app.use(simpleErrorHandler);
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`✅ Server is running on http://localhost:${PORT}`);
        console.log(`✅ GraphQL endpoint: http://localhost:${PORT}/graphql`);
    });
}
initServer().catch(error => {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
});
//# sourceMappingURL=server.js.map