export class Auto{
	marca:string;
	modello:string;
	porte:number;
	cilindrata:number;
	annodiimmatricolazione:number;
	telaio:number;

	constructor(
	marca:string,
	modello:string,
	porte:number,
	cilindrata:number,
	annodiimmatricolazione:number,
	telaio:number){
	this.marca=marca;
	this.modello=modello;
	this.porte=porte;
	this.cilindrata=cilindrata;
	this.annodiimmatricolazione=annodiimmatricolazione;
	this.telaio=telaio;}



info(){
	return ' La marca e il modello dell auto sono ' + this.marca + this.modello + ' porte '+ this.porte +' cilindrata ' + this.cilindrata + ' immatricolata nel ' + this.annodiimmatricolazione + ' numero telaio ' + this.telaio + '';}
}
