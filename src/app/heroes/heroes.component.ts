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

  selectedHero : Hero = defaultHero;
  hasError=false;
  deleteDialogOpen = false;

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
      this.resetNewHeroName();

      if (this.heroes.length ===1) {
        this.selectedHero = newHero;
      }

    }else{
      this.hasError = true;
    }
  
  }
  onDeleteAll(): void {
    this.heroes = [];
    this.selectedHero = defaultHero;
    this.toggleDeleteDialog(false);
  }

  onDeleteSelectedHero(): void {
    const newHeroes = this.heroes.filter(hero => {
      return this.selectedHero.id !== hero.id;
    });

    this.heroes = newHeroes;

    if (!newHeroes.length) {
      this.selectedHero = defaultHero;
    }
  }

  toggleDeleteDialog(show: boolean): void {
    this.deleteDialogOpen = show;
  }

  resetError(): void {
    this.hasError=false;
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
