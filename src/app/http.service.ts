import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`https://api.chucknorris.io/jokes/categories`);
  }

  getFacts(categorie: string = 'money') {
    // return this.http.get(`https://www.chucknorrisfacts.fr/api/get?data=type:text;nb=${n};tri=alea`);
    return this.http.get(`https://api.chucknorris.io/jokes/search?query=${categorie}`);
  }
}
