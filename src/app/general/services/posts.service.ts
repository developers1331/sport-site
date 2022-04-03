import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPost } from 'src/app/modules/admin/shared/interfaces';
import { IFbCreateResponse } from 'src/app/modules/admin/shared/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    constructor(private http: HttpClient) {}

    public create(post: IPost): Observable<IPost> {
        return this.http
            .post<any>(`${environment.fbDbUrl}/posts.json`, post)
            .pipe(
                map((response: IFbCreateResponse) => {
                    return {
                        ...post,
                        id: response.name,
                        date: new Date(post.date),
                    };
                })
            );
    }

    public getAllPosts(): Observable<IPost[]> {
        return this.http.get(`${environment.fbDbUrl}/posts.json`).pipe(
            map((response: { [key: string]: any }) => {
                return Object.keys(response).map((key) => ({
                    ...response[key],
                    id: key,
                    date: new Date(response[key].date),
                }));
            })
        );
    }

    public deletePost(id: string): Observable<any> {
        return this.http.delete(`${environment.fbDbUrl}/posts/${id}.json`);
    }

    public getById(id: string): Observable<IPost> {
        return this.http.get(`${environment.fbDbUrl}/posts/${id}.json`).pipe(
            map((post: any) => {
                return {
                    ...post,
                    id,
                    date: new Date(post.date),
                };
            })
        );
    }

    public uppDatePost(post: IPost): Observable<IPost> {
        return this.http.patch<IPost>(
            `${environment.fbDbUrl}/posts/${post.id}.json`,
            post
        );
    }
}
