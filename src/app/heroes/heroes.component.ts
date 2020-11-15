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

  selectedHero : Hero = {
    name: 'Windstorm',
    id:1
  }

  onSelect(newHero:Hero): void {
    this.selectedHero = newHero;
  }
  selectDefaultHero():void{
    this.selectedHero = this.heroes[0];
  }


  ngOnInit(): void {
    this.selectDefaultHero();
  }

}
