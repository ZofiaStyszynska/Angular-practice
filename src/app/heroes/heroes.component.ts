import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mocks/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  constructor() { }

  heroes = HEROES;
  newHeroName = '';

  selectedHero : Hero = {
    name: '',
    id:0
  };

  onSelect(newHero: Hero): void {
    this.selectedHero = newHero;
  }
  onAdd(): void {
    const newHero = {
      name: this.newHeroName,
      id: this.getNewID()
    };
    if (this.isNewNameValid()){
      this.heroes.push(newHero);

    }else{
      window.alert("Hero name must be longer than 2")
    }
  
  }
  isNewNameValid():boolean{
    const nameLength = this.newHeroName.length;
    return (nameLength>2 &&nameLength<13) ? true:false;
      
    
  }

  getNewID(): number {
    const ids = this.heroes.map(hero => {
      return hero.id;
    });

    return Math.max(...ids) + 1;
  }
  selectDefaultHero():void{
    this.selectedHero = this.heroes[0];
  }


  ngOnInit(): void {
    this.selectDefaultHero();
  }

}
