import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http: HttpClient) { }

  getQAs() {
    return this._http.get('https://opentdb.com/api.php?amount=10');
  }
}
