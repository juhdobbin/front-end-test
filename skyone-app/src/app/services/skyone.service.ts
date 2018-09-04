import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkyoneService {

  constructor(private http: Http) { }

  getPhotos() {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`)
      .pipe(map(response => response.json()));
  }
}
