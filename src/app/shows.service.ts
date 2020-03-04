import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ICurrentshowsData } from './icurrentshows-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private httpClient: HttpClient) { }

  getCurrentShows( shows: string, Genre: string, language: string, Time: string, day: string, rating: string ){
    return this.httpClient. get<ICurrentshowsData>(
     `${environment.baseUrl}api.tvmaze.com/shows?q=${shows}&appid=${environment.appId}` 
    )
  }
}
