import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientsComponent } from './clients/clients.component';
import { CompteurComponent } from './compteur/compteur.component';
import { BonjourComponent } from './bonjour/bonjour.component';
import { ImcComponent } from './imc/imc.component';
import { ReverseComponent } from './reverse/reverse.component';
import { ReversePipe } from './reverse.pipe';
import { TodolistComponent } from './todolist/todolist.component';
import { ChuckComponent } from './chuck/chuck.component';
import { HttpClientModule } from '@angular/common/http';
import { FactDetailComponent } from './fact-detail/fact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ClientsComponent,
    CompteurComponent,
    BonjourComponent,
    ImcComponent,
    ReverseComponent,
    ReversePipe,
    TodolistComponent,
    ChuckComponent,
    FactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
