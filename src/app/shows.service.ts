import { Injectable, APP_ID } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICurrentshowsData } from './icurrentshows-data';
import { environment } from 'src/environments/environment';
import { ICurrentshows } from './icurrentshows';
import { scheduled } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) { }

  //getCurrentShows( shows: string, Genre: string, language: string, Time: string, day: string, rating: string ):Observable<ICurrentshows>{
   // return this.httpClient. get<ICurrentshowsData>(
   //  `${environment.baseUrl}api.tvmaze.com/shows?q=${shows}&appid=${environment.appId}` 
   // ).pipe(shows)(data => this.transformToICurrentShows(data))
 // }

 getCurrentShows( show: string, language: string, genres: string, runtime: number, time: number, day: string, rating:number, image: string) {
   return this.httpClient.get<ICurrentshowsData>(
   `${environment.baseUrl}http:api.tvmaze.com/show?q={show}&appid=${environment.appId}`
   )
 }
 }


