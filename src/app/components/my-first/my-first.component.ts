import { Component } from "@angular/core";

@Component({
  selector: "app-my-first",
  template: `
    <h1>{{ title }}</h1>
    <p>{{ coment }}</p>
    <p>{{ year }}</p>
  `,
})
export class MyFirstComponent {
  public title: string;
  public coment: string;
  public year: Date;

  constructor() {
    this.title = "Hola mundo";
    this.coment = "Este es mi primer componente con Angular";
    this.year = new Date();
    console.log("Componente my-first cargado");
  }
}
