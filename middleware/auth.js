import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import User from '../modules/user/user.model.js';
import { TOKEN_SECRET } from '../utils/constants.js';
class AuthenticationError extends GraphQLError {
    constructor(message) {
        super(message, {
            extensions: {
                code: 'UNAUTHENTICATED',
            },
        });
    }
}
export const extractTokenFromHeader = (authHeader) => {
    if (!authHeader) {
        return null;
    }
    if (!authHeader.startsWith('Bearer ')) {
        return null;
    }
    const token = authHeader.substring(7);
    return token || null;
};
export const verifyJWTToken = (token) => {
    try {
        const decoded = jwt.verify(token, TOKEN_SECRET);
        return decoded;
    }
    catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            console.log('Token has expired');
            return { status: 401, message: 'Token has expired' };
        }
        else if (error instanceof jwt.JsonWebTokenError) {
            console.log('Invalid token');
            return { status: 401, message: 'Invalid token' };
        }
        else {
            console.log('Token verification failed');
            return { status: 401, message: 'Token verification failed' };
        }
    }
};
export const getUserFromToken = async (payload) => {
    if (!payload.id) {
        return null;
    }
    try {
        const user = await User.findById(payload.id).select('-password');
        if (!user) {
            return null;
        }
        return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
        };
    }
    catch (error) {
        console.error('Error fetching user from token:', error);
        return null;
    }
};
export const getAuthContext = async (authHeader) => {
    const token = extractTokenFromHeader(authHeader);
    if (!token) {
        return {
            isAuthenticated: false,
        };
    }
    const payload = verifyJWTToken(token);
    if (payload.status === 401) {
        return {
            isAuthenticated: false,
        };
    }
    const user = await getUserFromToken(payload);
    if (!user) {
        return {
            isAuthenticated: false,
        };
    }
    return {
        user,
        isAuthenticated: true,
    };
};
export const requireAuth = (context) => {
    if (!context.isAuthenticated || !context.user) {
        throw new AuthenticationError('You must be logged in to perform this action');
    }
};
export const requireAdmin = (context) => {
    requireAuth(context);
    if (context.user?.role !== 'admin') {
        throw new AuthenticationError('You must be an admin to perform this action');
    }
};
//# sourceMappingURL=auth.js.map