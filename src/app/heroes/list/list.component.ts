import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  deletedHero?: string = "";

  public heroesName: string[] = ["ironman", "spiderman", "thor", "hulk", "she hulk"];

  public deleteHero():void{
    this.deletedHero = this.heroesName.pop();
  }

}
