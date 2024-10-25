import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases-practica';

  counter: number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }

}
