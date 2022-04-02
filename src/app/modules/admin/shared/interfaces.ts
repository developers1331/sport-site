export interface IUser {
    email: string;
    password: string;
    returnSecureToken?: boolean;
}

export interface IfbAuthResponse {
    idToken: string;
}
