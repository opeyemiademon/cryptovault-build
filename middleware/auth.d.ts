export interface JWTPayload {
    id?: string;
    iat?: number;
    exp?: number;
    status?: number;
    message?: string;
}
export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    role: string;
    status?: number;
    message?: string;
}
export interface AuthContext {
    user?: AuthenticatedUser;
    isAuthenticated: boolean;
}
export declare const extractTokenFromHeader: (authHeader: string) => string | null;
export declare const verifyJWTToken: (token: string) => JWTPayload;
export declare const getUserFromToken: (payload: JWTPayload) => Promise<AuthenticatedUser | null>;
export declare const getAuthContext: (authHeader: string) => Promise<AuthContext>;
export declare const requireAuth: (context: AuthContext) => void;
export declare const requireAdmin: (context: AuthContext) => void;
//# sourceMappingURL=auth.d.ts.map