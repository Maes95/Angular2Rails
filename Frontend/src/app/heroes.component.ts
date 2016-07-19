import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { HeroComponent } from './hero';
import { NewHeroComponent } from './new-hero';
import { EditHeroComponent } from './edit-hero';

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/heroes', component: HeroComponent},
  {path: '/new-hero', component: NewHeroComponent},
  {path: '/edit-hero/:id', component: EditHeroComponent}
])
export class HeroesAppComponent {
  title = '¡Heroes works!';
}

// ,
//
// "files": [
//   "main.ts",
//   "typings.d.ts"
// ]
