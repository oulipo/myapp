import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements OnInit {

  // propriétés
  compteur: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // méthodes
  incrementeCompteur() {
    this.compteur += 1;
  }

  decrementeCompteur() {
    this.compteur -= 1;
  }

}
