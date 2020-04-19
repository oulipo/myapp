import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.scss']
})
export class ChuckComponent implements OnInit {

  categories: Object;
  categorie: string;
  facts: any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getCategories().subscribe(data => {
      this.categories = data;
      console.log('categories', data);
    })
  }

  showFacts() {
    this._http.getFacts(this.categorie).subscribe(data => {
      this.facts = data;
      console.log('facts', this.facts);
    })
  }

}
