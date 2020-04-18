import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent implements OnInit {

  taille: number;
  masse: number;
  imc: any = 'en attente de valeurs...';
  
  constructor() { }

  ngOnInit(): void {
  }

  calculerIMC():any {
    if (+this.taille > 0 && +this.masse > 0) {
      this.imc = (+this.masse / Math.pow(+this.taille, 2)).toFixed(2);
    } else {
      this.imc =  'en attente de valeurs...'
    }
    return this.imc;
  }
}
