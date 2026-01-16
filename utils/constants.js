import dotenv from 'dotenv';
dotenv.config();
export const TOKEN_SECRET = process.env.JWT_SECRET || 'cryptovault-secret-key-change-in-production';
export const TOKEN_EXPIRY = '7d';
export const MONGO_URL = process.env.MONGO_URL || process.env.DATABASE_URL || 'mongodb://localhost:27017/cryptovault';
export const PORT = parseInt(process.env.PORT || '9000', 10);
//# sourceMappingURL=constants.js.map