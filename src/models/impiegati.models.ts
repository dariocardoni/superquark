export class Impiegato{
	nome:string;
	cognome:string;
	datadinascita:number;
	domicilio:string;
	mansione:string;
	stipulacontratto:number;
	anzianita:number;
	stiplordomensile:number;
	stiplordoannuale:number;

	constructor(
	nome:string,
	cognome:string,
	datadinascita:number,
	domicilio:string,
	mansione:string,
	stipulacontratto:number,
	anzianita:number,
	stiplordomensile:number,
	stiplordoannuale:number){
	this.nome=nome;
	this.cognome=cognome;
	this.datadinascita=datadinascita;
	this.domicilio=domicilio;
	this.mansione=mansione;
	this.stipulacontratto=stipulacontratto;
	this.anzianita=anzianita;
	this.stiplordomensile=stiplordomensile;
	this.stiplordoannuale=stiplordoannuale;}



infoImpiegato(){
	return ' L impiegato si chiama ' + this.nome + this.cognome + ' nato il ' + this.datadinascita + ' domiciliato in ' + this.domicilio + ' lavora da ' + this.anzianita + ' con contratto stipulato il ' + this.stipulacontratto + ' con mansione ' + this.mansione + ' stipendio lordo mensile ' + this.stiplordomensile + ' stipendio lordo annuale ' + this.stiplordoannuale+'';}

	}
