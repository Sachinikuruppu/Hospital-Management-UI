import { Component } from '@angular/core';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-angular-material';
  // tiles: Tile[] = [
  //   {text: 'Two', cols: 1, rows: 4, color: 'lightgreen'},
  //   {text: 'One', cols: 3, rows: 4, color: 'lightblue'}
   
  //   // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];
  // constructor(){}
}
