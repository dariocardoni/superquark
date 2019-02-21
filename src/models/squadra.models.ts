import { Giocatore } from '../models/giocatori.models';


export class Squadra{
	nome:string;
	datafondazione:number;
	posizione_classifica:string;
	numerogoal:number;
	lista_giocatori:Array<Giocatore>;

	constructor(
	nome:string,
	datafondazione:number,
	posizione_classifica:string,
	numerogoal:number,
	lista_giocatori:Array<Giocatore>)
	{
	this.nome=nome;
	this.datafondazione=datafondazione;
	this.posizione_classifica=posizione_classifica;
	this.numerogoal=numerogoal;
	this.lista_giocatori=lista_giocatori;
	}

	infoSquadra() {
	var ris="";
	for( var i=0; i<this.lista_giocatori.length; i++){
	ris=ris + this.lista_giocatori[i].infoGiocatore() + '';
	}
	return ' La ' + this.nome + ' è una squadra fondata nel ' + this.datafondazione + ' attualmente ' + this.posizione_classifica + ' in classifica ' + ' con reti ' + this.numerogoal + ' in attivo e composta dai seguenti giocatori:' + ' ' + ris;
	}
	}
	




