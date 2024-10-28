import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteCharacterProp: EventEmitter<string> = new EventEmitter();

  @Input()
  public charactersProp: Character[] = [{
    name:"nombre",
    power:400}
  ];

  // onDeleteCharacter(idCharacter:number): void{
  //   this.onDeleteCharacterProp.emit(idCharacter);
  // }

  onDeleteCharacter(idCharacter?:string): void{
    this.onDeleteCharacterProp.emit(idCharacter);
  }
}
