import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
    IDirectionProgram,
    IProgram,
    ITypeProgram,
} from 'src/app/modules/programs/shared/interfaces';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root',
})
export class ProgramService {
    public dataProgam$: Observable<IProgram[]> = new Observable();
    public dataImagesProgram$: Observable<any[]> = new Observable();
    public dataProgramCommon$: Observable<any[]> = new Observable();

    constructor(private http: HttpClient) {
        this.dataProgam$ = this.getPrograms();
        this.dataImagesProgram$ = this.getProgramImages();
        // this.dataProgramCommon$ = this.getTypeProgram();
    }

    public postProgramTypeImage(
        programType: ITypeProgram
    ): Observable<ITypeProgram> {
        return this.http.patch<ITypeProgram>(
            `${environment.fbDbUrl}/program-images/type/${programType.type}.json`,
            {
                type: programType.type,
                text: programType.text,
                bgImageType: programType.bgImageType,
            }
        );
    }

    public postProgramDirectionImage(
        directionProgram: IDirectionProgram
    ): Observable<IDirectionProgram> {
        return this.http.patch<IDirectionProgram>(
            `${environment.fbDbUrl}/program-images/direction/${directionProgram.direction}.json`,
            {
                direction: directionProgram.direction,
                text: directionProgram.text,
                bgImageDirection: directionProgram.bgImageDirection,
            }
        );
    }

    public getProgramImages(): Observable<any> {
        return this.http.get(`${environment.fbDbUrl}/program-images.json`);
    }

    public postProgram(program: IProgram): Observable<IProgram> {
        return this.http.post<IProgram>(
            `${environment.fbDbUrl}/program.json`,
            program
        );
    }

    public getPrograms(): Observable<IProgram[]> {
        return this.http
            .get<IProgram[]>(`${environment.fbDbUrl}/program.json`)
            .pipe(
                map((response: { [key: string]: any }) => {
                    return Object.keys(response).map((key) => ({
                        ...response[key],
                        id: key,
                    }));
                })
            );
    }

    public removeProgram(id: string): Observable<IProgram> {
        return this.http.delete<IProgram>(
            `${environment.fbDbUrl}/program/${id}.json`
        );
    }

    public editProgram(program: IProgram): Observable<IProgram> {
        return this.http.patch<IProgram>(
            `${environment.fbDbUrl}/program/${program.id}.json`,
            program
        );
    }

    public getTypeProgram(): Observable<any> {
        return this.dataImagesProgram$.pipe(
            map((data: { [key: string]: any }) => {
                return data['type'];
            }),
            map((data) => {
                return Object.values(data);
            })
        );
    }

    public getDirectionProgram(): Observable<any> {
        return this.dataImagesProgram$.pipe(
            map((data: { [key: string]: any }) => {
                return data['direction'];
            }),
            map((data) => {
                return Object.values(data);
            })
        );
    }

    public getProgramById(id: string) {
        return this.http.get(`${environment.fbDbUrl}/program/${id}.json`).pipe(
            map((program: any) => {
                return {
                    ...program,
                    id: id,
                };
            })
        );
    }
}
