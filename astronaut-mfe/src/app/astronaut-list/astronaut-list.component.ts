import { Component } from '@angular/core';
import { AstronautDetails } from '../domain/astronaut-details';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-astronaut-list',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './astronaut-list.component.html',
  styleUrl: './astronaut-list.component.scss'
})
export class AstronautListComponent {
  displayedColumns: string[] = ['id', 'name', 'age', 'missions', 'active'];
  dataSource: AstronautDetails[] = [
    { id: 1, name: 'Alice Johnson', age: 34, missions: ['Apollo 11', 'Gemini 4'], active: true },
    { id: 2, name: 'Bob Smith', age: 40, missions: ['Skylab 2'], active: false },
    { id: 3, name: 'Charlie Brown', age: 29, missions: ['STS-1', 'STS-7'], active: true },
    { id: 4, name: 'Diana Prince', age: 38, missions: ['Mir EO-15'], active: false },
    { id: 5, name: 'Ethan Hunt', age: 45, missions: ['ISS Expedition 20'], active: true }
  ];
}
