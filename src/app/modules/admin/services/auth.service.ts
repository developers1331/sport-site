import { Injectable } from '@angular/core';
import {
    IfbAuthResponse,
    IUser,
} from 'src/app/modules/admin/shared/interfaces';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public error$: Subject<string> = new Subject<string>();

    constructor(private http: HttpClient) {}

    get token(): string | any {
        const expDate: any = localStorage.getItem('fb-token-exp');
        if (new Date() > new Date(expDate)) {
            this.logout();
            return null;
        }
        return localStorage.getItem('fb-token');
    }

    public login(user: IUser): Observable<any> {
        user.returnSecureToken = true;
        return this.http
            .post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
                user
            )
            .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
    }

    public logout() {
        this.setToken(null);
    }

    public isAuth(): boolean {
        return !!this.token;
    }

    private handleError(error: HttpErrorResponse) {
        const { message } = error.error.error;

        switch (message) {
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Такого email не существует');
                break;
            case 'INVALID_PASSWORD':
                this.error$.next('Неверный пароль');
                break;
            case 'INVALID_EMAIL':
                this.error$.next('Неверный email');
                break;
        }

        return throwError(error);
    }

    private setToken(response: any) {
        if (response) {
            const expDate = new Date(
                new Date().getTime() + +response.expiresIn * 1000
            );
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString());
        } else {
            localStorage.clear();
        }
    }
}
