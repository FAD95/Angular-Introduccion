import { Component } from "@angular/core";
import { Employee } from "./models/employee";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor() {
    if (!localStorage.getItem("employeeArray")) {
      localStorage.setItem(
        "employeeArray",
        JSON.stringify([
          { id: 1, name: "Fad", country: "COL" },
          { id: 2, name: "Cami", country: "CHL" },
          { id: 3, name: "Gerard", country: "USA" },
        ])
      );
    }
  }
  employeeArray: Employee[] = JSON.parse(localStorage.getItem("employeeArray"));

  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
      localStorage.setItem("employeeArray", JSON.stringify(this.employeeArray));
    }
    this.selectedEmployee = new Employee();
    localStorage.setItem("employeeArray", JSON.stringify(this.employeeArray));
  }

  openToEdit(employee: Employee) {
    this.selectedEmployee = employee;
    localStorage.setItem("employeeArray", JSON.stringify(this.employeeArray));
  }

  delete() {
    if (confirm("Are you sure you want to delete this employee?")) {
      this.employeeArray = this.employeeArray.filter(
        (x) => x !== this.selectedEmployee
      );
      this.selectedEmployee = new Employee();
      localStorage.setItem("employeeArray", JSON.stringify(this.employeeArray));
    }
  }
}
