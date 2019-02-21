export class Utente{
nome:string;
cognome:string;
residenza:string;
telefono:number;
contrattodel:number;
ultimabolletta:number;

constructor(
nome:string,
cognome:string,
residenza:string,
telefono:number,
contrattodel:number,
ultimabolletta:number
) {
	this.nome=nome;
this.cognome=cognome;
this.residenza=residenza;
this.telefono=telefono;
this.contrattodel=contrattodel;
this.ultimabolletta=ultimabolletta;
}


info (){
	return ' L utente si chiama ' + this.nome +  this.cognome+' vive in ' + this.residenza+' numero di telefono '+ this.telefono+' il suo contratto risale al '+ this.contrattodel+ '  numero dell ultima bolletta ' + this.ultimabolletta+'';}
}