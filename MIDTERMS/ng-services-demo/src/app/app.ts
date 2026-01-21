import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('ng-services-demo');

  // OLD LOCAL DATA (KEPT)
  public employeesList = [
    {
      id: 101,
      firstname: 'Joseph',
      lastname: 'Dizon',
      email: 'jdizon@hau.edu.ph'
    },
    {
      id: 102,
      firstname: 'James',
      lastname: 'Atienza',
      email: 'jatienza@hau.edu.ph'
    },
    {
      id: 103,
      firstname: 'John',
      lastname: 'Cena',
      email: 'jcena@hau.edu.ph'
    },
    {
      id: 104,
      firstname: 'Robert',
      lastname: 'Quintana',
      email: 'rquintana@hau.edu.ph'
    },
    {
      id: 105,
      firstname: 'Angelene',
      lastname: 'Guiao',
      email: 'asguiao4@hau.edu.ph'
    }
  ];

  // SERVICE-BASED EMPLOYEES
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  // PRODUCTS FROM SERVICE
  public products: {
    productId: string;
    productName: string;
    description: string;
    price: number;
  }[] = [];

  constructor(
    private _employeeService: Employee,
    private _productsService: Products
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts();
  }

}
