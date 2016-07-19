import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { HeroFormComponent } from '../hero-form'

@Component({
  moduleId: module.id,
  selector: 'edit-hero',
  templateUrl: 'edit-hero.component.html',
  styleUrls: ['edit-hero.component.css'],
  directives: [HeroFormComponent]
})

export class EditHeroComponent implements OnInit {
  id: string;

  constructor(public http: Http, public params: RouteSegment) {
  }

  ngOnInit() {
    this.id = this.params.getParam('id');
  }

}
