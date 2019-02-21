import { Impiegato } from '../models/impiegati.models';

export class Azienda{
	nome:string;
	sedelegale:string;
	sedeoperativa:string;
	annofondazione:number;
	listaimpiegati:Array<Impiegato>;

	constructor(
	nome:string,
	sedelegale:string,
	sedeoperativa:string,
	annofondazione:number,
	listaimpiegati:Array<Impiegato>)
	{
	this.nome=nome;
	this.sedelegale=sedelegale;
	this.sedeoperativa=sedeoperativa;
	this.annofondazione=annofondazione;
	this.listaimpiegati=listaimpiegati;
	}

	infoAzienda() {
	var ris="";
	for( var i=0; i<this.listaimpiegati.length; i++){
	ris=ris + this.listaimpiegati[i].infoImpiegato() + '';
	}
	
	return ' nome ' + this.nome + ' sedelegale ' + this.sedelegale + ' sedeoperativa ' + this.sedeoperativa + ' anno di fondazione ' + this.annofondazione +' '+ ris;
	}
}

 

