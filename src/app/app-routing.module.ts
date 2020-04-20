import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientsComponent } from './clients/clients.component';
import { CompteurComponent } from './compteur/compteur.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { ReverseComponent } from './reverse/reverse.component';
import { ImcComponent } from './imc/imc.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ChuckComponent } from './chuck/chuck.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'compteur', component: CompteurComponent},
  { path: 'reverse', component: ReverseComponent},
  { path: 'imc', component: ImcComponent},
  { path: 'todolist', component:TodolistComponent},
  { path: 'chuck', component: ChuckComponent},
  { path: 'quiz', component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
