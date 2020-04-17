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

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ClientsComponent,
    CompteurComponent,
    BonjourComponent,
    ImcComponent,
    ReverseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
