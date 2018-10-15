import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

console.log(Hero, 'dsad')
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero;
  
  constructor(private heroService: HeroService) { 
    
  };

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(result => this.heroes = result);
 } 
  
  ngOnInit() {
    this.getHeroes();
    console.log(this.heroService.getHeroes(), 'testestestes');
    
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
