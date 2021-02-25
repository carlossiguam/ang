import {Component} from '@angular/core';

@Component({
    selector: 'rellena',
    template: `
    <h1> Hola genios este es un componenente nuevo </h1>
    <p>primer parrafo de la aplicacion</p>
    `
})

export class Rellena{
    constructor(){
        console.log("componente rellena insertado");
    }
}