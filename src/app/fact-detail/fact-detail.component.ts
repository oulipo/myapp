import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fact-detail',
  templateUrl: './fact-detail.component.html',
  styleUrls: ['./fact-detail.component.scss']
})
export class FactDetailComponent implements OnInit {

  @Input() myfact: string;

  constructor() { }

  ngOnInit(): void {
  }

}
