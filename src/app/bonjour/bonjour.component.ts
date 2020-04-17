import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.scss']
})
export class BonjourComponent implements OnInit {

  prenom: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
