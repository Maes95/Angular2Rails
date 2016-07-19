import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/common';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html',
  styleUrls: ['hero-form.component.css'],
  providers: [HeroService]
})

export class HeroFormComponent implements OnInit {
  @Input() id;

  hero = new Hero();
  constructor(public http: Http,
              public router: Router,
              private heroService: HeroService) {}

  ngOnInit() {
    if (this.id) {
      this.http.get('/api/heros/' + this.id + '.json')
        .subscribe(response => this.hero = response.json());
    }
  }

  onSubmit() {
    this.heroService
        .save(this.hero, this.id)
        .subscribe(response => this.router.navigate(['/heroes']));
  }

}
