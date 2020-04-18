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
  addCompteur(valeur: number) {
    this.compteur += valeur;
  }

  // decrementeCompteur() {
  //   this.compteur -= 1;
  // }

  classes() {
    let mesClasses = {
      chaud: this.compteur > 10,
      froid: this.compteur < -10
    }
    return mesClasses;
  }

}
