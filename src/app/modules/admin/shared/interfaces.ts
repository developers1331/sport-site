export interface IUser {
    email: string;
    password: string;
    returnSecureToken?: boolean;
}

export interface IfbAuthResponse {
    idToken: string;
}

export interface IPost {
    id?: string;
    title: string;
    text: string;
    author: string;
    img?: string;
    date: Date;
}

export interface IFbCreateResponse {
    name: string;
}
