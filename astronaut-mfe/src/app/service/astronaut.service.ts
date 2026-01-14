import { Injectable } from '@angular/core';
import { AstronautDetails } from '../domain/astronaut-details';

@Injectable({
  providedIn: 'root'
})
export class AstronautService {

  private astronauts: AstronautDetails[] = [];

  addAstronaut(astronaut: AstronautDetails) {
    this.astronauts.push(astronaut);
  }

  getAstronauts(): AstronautDetails[] {
    return this.astronauts;
  }
}
