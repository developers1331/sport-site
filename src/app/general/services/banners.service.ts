import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
    IMainBanner,
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

    public getReviewsBlock(): Observable<IReviewBanner[]> {
        return this.http
            .get(`${environment.fbDbUrl}/banners/reviews.json`)
            .pipe(
                map((response: { [key: string]: any }) => {
                    return Object.keys(response).map((key) => ({
                        ...response[key],
                        id: key,
                    }));
                })
            );
    }

    public uppdateReviewBlock(): void {
        //todo
    }
    public removeReviewBlock(id: string) {
        return this.http.delete(
            `${environment.fbDbUrl}/banners/reviews/${id}.json`
        );
    }

    public setMainBannerText(text: IMainBanner) {
        return this.http.patch(
            `${environment.fbDbUrl}/banners/main.json`,
            text
        );
    }

    public getMainBannerText(): Observable<any> {
        return this.http.get(`${environment.fbDbUrl}/banners/main.json`);
    }
}
