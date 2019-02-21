export class Apparecchio{
	marca:string;
	modello:string;
	annocostruzione:number;
	numeroseriale:number;
	annoacquisto:number;

	constructor(
	marca:string,
	modello:string,
	annocostruzione:number,
	numeroseriale:number,
	annoacquisto:number){
	this.marca=marca;
	this.modello=modello;
	this.annocostruzione=annocostruzione;
	this.numeroseriale=numeroseriale;
	this.annoacquisto=annoacquisto;}


infoApparecchio(){
	 return 'La marca e il modello dell apparecchio sono ' + this.marca + this.modello + ' è stato costruito nel ' + this.annocostruzione + ' numero seriale ' + this.numeroseriale + ' ed è stato acquistato nel ' + this.annoacquisto +'';}
	 }