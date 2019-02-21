export class Giocatore{
	nome:string;
	cognome:string;
	ruolo:string;
	eta:number;


constructor(
    nome:string,
	cognome:string,
	ruolo:string,
	eta:number
	){
	this.nome=nome;
	this.cognome=cognome;
	this.ruolo=ruolo;
	this.eta=eta;}

	infoGiocatore() 
	{ return ' Nome:' + this.nome + ' Cognome:' + this.cognome + ' Ruolo: ' + this.ruolo +  ' Eta: ' + this.eta +''}
	}