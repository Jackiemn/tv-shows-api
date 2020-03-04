import { scheduled } from 'rxjs';

export interface ICurrentshowsData {
  shows: [
   {
     show: string,
     language: string,
     genres: string,
     runtime: number,
     time: number,
     day: string
     rating: number
   },
  ]}
  
