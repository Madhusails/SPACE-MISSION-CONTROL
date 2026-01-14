import { Component } from '@angular/core';
import { NasaService } from '../service/nasaService';

@Component({
  selector: 'app-space-station',
  templateUrl: './space-station.component.html',
  styleUrls: ['./space-station.component.scss']
})
export class SpaceStationComponent {
  private nasaService: NasaService;
  images: any[] = [];

  constructor(nasaService: NasaService) {
    this.nasaService = nasaService;
    this.nasaService.getSpaceStationImages().subscribe(response => {
      this.images = response.collection.items.map((item: any) => ({
        title: item.data[0].title,
        url: item.links[0].href 
      }));
    });
  }
}