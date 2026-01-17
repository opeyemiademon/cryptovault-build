import dotenv from 'dotenv';
dotenv.config();
export const TOKEN_SECRET = process.env.JWT_SECRET || 'cryptovault-secret-key-change-in-production';
export const TOKEN_EXPIRY = '7d';
export const MONGO_URL = 'mongodb+srv://kayus4school_db_user:kBNxfhBTYvB5qgJI@cluster0.kbid8zc.mongodb.net/cryptovault?retryWrites=true&w=majority&appName=Cluster0';
export const PORT = parseInt(process.env.PORT || '9000', 10);
//# sourceMappingURL=constants.js.map