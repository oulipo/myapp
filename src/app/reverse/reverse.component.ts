import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse',
  templateUrl: './reverse.component.html',
  styleUrls: ['./reverse.component.scss']
})
export class ReverseComponent implements OnInit {

  phrase: string = '';
  inverse: string = this.phrase.split('').reverse().join('');

  

  constructor() { }

  ngOnInit(): void {
  }

}
