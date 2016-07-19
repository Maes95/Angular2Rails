import { Component,  OnInit } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { HeroFormComponent } from '../hero-form'

@Component({
  moduleId: module.id,
  selector: 'new-hero',
  templateUrl: 'new-hero.component.html',
  styleUrls: ['new-hero.component.css'],
  directives: [HeroFormComponent]
})

export class NewHeroComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
