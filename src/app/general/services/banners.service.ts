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
        return this.http
            .post<any>(`${environment.fbDbUrl}/banners/reviews.json`, banner)
            .pipe(
                map((response: IFbCreateResponse) => {
                    return {
                        ...banner,
                        id: response.name,
                    };
                })
            );
    }

    public getReviewsBlock(): void {
        //todo
    }

    public uppdateReviewBlock(): void {
        //todo
    }
}
