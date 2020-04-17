import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientsComponent } from './clients/clients.component';
import { CompteurComponent } from './compteur/compteur.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { ReverseComponent } from './reverse/reverse.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'compteur', component: CompteurComponent},
  { path: 'bonjour', component: BonjourComponent},
  { path: 'reverse', component: ReverseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
