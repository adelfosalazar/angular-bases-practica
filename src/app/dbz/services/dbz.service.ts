import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }

  characterList: Character[] = [{
    id: uuid(),
    name: "Goku",
    power: 1000
  },
  {
    id: uuid(),
    name: "Krilin",
    power: 500
  },
  {
    id: uuid(),
    name: "Pikolo",
    power: 800
  }];

  addCharacter(character: Character): void {
    const newCharacter = {
      id: uuid(),
      ...character
    }

    this.characterList.push(newCharacter);
  }

  // onDeleteCharacterListener(idCharacter:number){
  //   this.characterList.splice(idCharacter, 1);
  // }

  deleteCharacterById(id: string){
    this.characterList = this.characterList.filter(c => c.id !== id);
  }
}
