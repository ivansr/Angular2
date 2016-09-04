import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-pruebas',
  templateUrl: 'pruebas.component.html',
  styleUrls: ['pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  constructor() { }
pruebas: any[];
nuevaPrueba = '';

  ngOnInit() {
    this.pruebas = ['prueba1','prueba2','prueba3']
  }

  add() {
 this.pruebas.push(this.nuevaPrueba);
 this.nuevaPrueba = '';
}
}
