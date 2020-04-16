import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientsComponent } from './clients/clients.component';
import { CompteurComponent } from './compteur/compteur.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'compteur', component: CompteurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
