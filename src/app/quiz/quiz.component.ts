import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

interface QA {
  question: string;
  reponse: string;
  autres: string[],
  type: string;
  categorie: string;
  difficulte: string;
  propositions: string[];
}

// swap a = [b, b=a][0];

function shuffle(tableau: Array<any>): Array<any> {
  let t = [...tableau];
  for(let i = t.length - 1; i > 1; i--) {
    let j = Math.floor(Math.random() * i);
    // let temp = t[j]; 
    // t[j] = t[i]
    // t[i] = temp; 
    t[i] = [t[j], t[j]=t[i]][0];
  }
  return t;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  qas: QA[];
  reponses: string[];
  note: number;
  bonnesReponses: string[];

  constructor(private _http: QuizService) { }

  ngOnInit(): void {
    this.reponses = new Array(10);
    this.start();
    
  }

  start() {
    this.bonnesReponses = [];
    this.note = null;
    this._http.getQAs().subscribe((data:any) => {
      console.log(data);
      let results = data.results;
      this.qas = data.results.map((qa:any):QA => ({
        question: qa.question,
        reponse: qa.correct_answer,
        autres: qa.incorrect_answers,
        type: qa.type,
        categorie: qa.category,
        difficulte: qa.difficulty,
        propositions: shuffle([...qa.incorrect_answers, qa.correct_answer]),
      }));
      console.log(this.qas);
    })
  }

  check() {
    console.log(this.reponses);
    this.bonnesReponses = this.reponses.filter((r, i) => r == this.qas[i].reponse);
    this.note = this.bonnesReponses.length;
    console.log(this.bonnesReponses, this.note);
  }

}
