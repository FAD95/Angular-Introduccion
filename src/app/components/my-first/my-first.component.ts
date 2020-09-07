import { Component } from "@angular/core";

@Component({
  selector: "app-my-first",
  template: `
    <h1>Hola mundo</h1>
    <p>Este es mi primer componente con Angular</p>
  `,
})
export class MyFirstComponent {
  constructor() {
    console.log("Componente my-first cargado");
  }
}
