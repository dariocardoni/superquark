import { Component } from '@angular/core';
import { Animale } from '../models/animali.models';
import { Utente } from '../models/utetenti.models';
import { Auto } from '../models/auto.models';
import { Apparecchio } from '../models/apperecchi.models';
import { Impiegato } from '../models/impiegati.models';
import { Azienda } from '../models/azienda.models';
import { Giocatore } from '../models/giocatori.models';
import { Squadra } from '../models/squadra.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'superquark';

  lista:Array<Animale>=[
  new Animale ('leone', 4,'savana','carne', 28),
  new Animale ('pipistrello', 4, 'grotte','insetti', 12)];

  utenti:Array<Utente>=[
  new Utente (' Ludovico ', ' Carosi ', 'Via Della Repubblica Roma', 3356734567, 1998, 1789),
  new Utente (' Mario ', ' Rossi ','Via dei Cerchi Roma', 3892345678, 2000, 37812)];

automobili:Array<Auto>=[
new Auto (' Fiat ', ' Cinquecento ',  5, 1200,  2011,  77890),
new Auto (' Mercedes ', ' Classe A ',  5, 1800,  2010,  7780990)];

apparecchi:Array<Apparecchio>=[
new Apparecchio (' Vorwerk ', ' Folletto ',  1980,  1200098766,  2011),
new Apparecchio (' Panasonic ', ' Diotron ',  2011, 18008766866,  2015)];


  impiegati:Array<Impiegato>=[
  new Impiegato (' Ludovico ', ' Carosi ', 1995,' Via Olanda Milano ',' Manager ', 2000, 27, 1000, 12000),
  new Impiegato (' Mario ', ' Rossi ', 1995,' Piazza Matteotti Roma ', ' Segretario ', 1990, 30, 1000, 12000)];

  aziende:Array<Azienda>=[
  new Azienda ( 'Ferrero Spa',  ' Milano ', ' Mantova ', 1930, this.impiegati),
  new Azienda ( 'Fiat Spa', ' Torino ', ' Torino ', 1901, this.impiegati)];

  giocatori:Array<Giocatore>=[
  new Giocatore ( ' Francesco ', ' Totti ', ' Attaccante ', 38),
  new Giocatore (' Robin ', ' Olsen ',' Portiere ',29),
  new Giocatore (' Ivan ', ' Marcano ', ' Difensore centrale ', 31),
  new Giocatore (' Daniele ', ' De Rossi ', ' Mediano ', 35),
  new Giocatore (' Lorenzo ', ' Pellegrini ', ' Centrale ', 22),
  new Giocatore (' Nicolò ', ' Zaniolo ', ' Trequartista ', 19)];

  squadre:Array<Squadra>=[
  new Squadra (' Roma ', 1927, ' Ottava ', 89, this.giocatori)];

}