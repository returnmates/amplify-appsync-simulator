export declare function generateToken(decodedToken: string | object): string;
export declare function parse(token: any): object;
/**
 * Updates the exp time of the static token to ensure the shipped token is fresh. If user passes an
 * issuer, updates the token with the issuer
 * @param token
 * @param issuer
 */
export declare function refreshToken(token: string, issuer?: string): string;
