export interface IToken {
    access: string;
    refresh: string;
}

export interface IJWT {
    token_type: string;
    exp: number;
    jti: string;
    user_id: number;
}
