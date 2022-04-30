import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
    IFbCreateResponse,
    IReviewBanner,
} from 'src/app/modules/admin/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BannersService {
    constructor(private http: HttpClient) {}

    public addReviewBlock(banner: IReviewBanner): Observable<IReviewBanner> {
        return this.http.post<IReviewBanner>(
            `${environment.fbDbUrl}/banners/reviews.json`,
            banner
        );
    }

    public getReviewsBlock(): Observable<any> {
        return this.http.get(`${environment.fbDbUrl}/banners/reviews.json`);
    }

    public uppdateReviewBlock(): void {
        //todo
    }

    public setMainBannerText(text: string) {
        //тут будешь посылать запрос text на сервер по адресу /banners/main.json
    }

    public getMainBannerText() {
        //тут будешь получать текст баннера с сервера по адресу /banners/main.json
    }
}
