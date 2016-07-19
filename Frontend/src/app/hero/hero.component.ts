import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { HeroService } from './hero.service'

@Component({
  moduleId: module.id,
  selector: 'hero-list',
  templateUrl: 'hero.component.html',
  providers: [HeroService]
})

export class HeroComponent{
  heroes: any;

  constructor(public http: Http,
              public router: Router,
              private heroService: HeroService) {
                this.heroes = [];
              }

  ngOnInit() {
    this.load();
  }

  load() {
    this.heroService
        .getHeroes()
        .subscribe(response => this.heroes = response.json());
  }

  edit(id: number) {
    this.router.navigate(['/edit-hero/' + id]);
  }

  delete(id: number) {
    this.heroService.delete(id).subscribe(response => this.load());
  }

  goToNew() {
    this.router.navigate(['/new-hero']);
  }
}
