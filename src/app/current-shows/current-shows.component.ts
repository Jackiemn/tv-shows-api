import { Component, OnInit } from '@angular/core';
import { ICurrentshows } from '../icurrentshows';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-current-shows',
  templateUrl: './current-shows.component.html',
  styleUrls: ['./current-shows.component.css']
})
export class CurrentShowsComponent implements OnInit {
  current: ICurrentshows
  constructor(private showsService: ShowsService) {
   
   } 

  ngOnInit() {
    this.showsService.getCurrentShows('shows','language',' genres', 'runtime', 'time', 'day','rating', 'image').subscribe(data => this.current = data)
    
  }
}

