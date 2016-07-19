import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HeroService {
  constructor(public http: Http) {
  }

  getHeroes() {
    return this.http.get('/api/heros.json');
  }

  delete(id: number) {
    return this.http.delete('/api/heros/' + id + '.json');
  }

  save(hero, id) {
    let body = JSON.stringify({ hero: hero });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    if (id) {
      return this.http.patch('/api/heros/' + id + '.json', body, options);
    } else {
      return this.http.post('/api/heros.json', body, options);
    }
  }
}
