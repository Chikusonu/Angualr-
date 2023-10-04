import { Component } from '@angular/core';
import { fadeAnimation } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[fadeAnimation]
})
export class AppComponent {
  title :string = 'Hello from app component ';
  count :number=100;
  printDate=new  Date(2017,4,15,15,13,25)

}
