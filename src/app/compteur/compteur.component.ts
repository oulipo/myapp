import { Component, OnInit } from '@angular/core';

interface Article {
  libelle: string;
  isDone: boolean;
}

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements OnInit {

  // propriétés
  compteur: number = 0;
  mot: string = '';

  liste: Article[] = [
    { libelle: 'eau', isDone: false },
    { libelle: 'café', isDone: true },
  ];

  constructor() { }

  toggleDone(i: number) {
    this.liste[i].isDone = !this.liste[i].isDone;
  }

  ngOnInit(): void {
  }

  reverse() {
   this.mot = this.mot.split('').reverse().join(''); 
  }


  // méthodes
  incrementeCompteur() {
    this.compteur += 1;
  }

  decrementeCompteur() {
    this.compteur -= 1;
  }

  classes() {
    let mesClasses = {
      chaud: this.compteur > 10,
      froid: this.compteur < -10
    }
    return mesClasses;
  }

}
