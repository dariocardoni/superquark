export class Animale{
	specie:string;
	zampe:number;
	habitat:string;
	alimentazione:string;
	vitamedia:number;

	constructor(
	specie:string,
	zampe:number,
	habitat:string,
	alimentazione:string,
	vitamedia:number){
	this.specie=specie;
	this.zampe=zampe;
	this.habitat=habitat;
	this.alimentazione=alimentazione;
	this.vitamedia=vitamedia;}


info() { return 'La specie si chiama,'+this.specie+' ha ' + this.zampe + ' zampe ' + ' il suo habitat è ' + this.habitat + ' si ciba di ' + this.alimentazione + ' la sua vita media è stimata in anni ' + this.vitamedia+'';}

}