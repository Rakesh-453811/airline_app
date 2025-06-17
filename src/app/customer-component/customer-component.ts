import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService, Customer } from '../customerservice/customer-service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './customer-component.html'
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  newCustomer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    loyaltyPoints: ''
  };
  updateCustomerData: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    loyaltyPoints: ''
  };
  customerById?: Customer;
  searchId: number = 0;
  showCustomersTable: boolean = false; // For "Show All Customers" button

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    // Do not load all customers by default
    // this.loadAllCustomers();
  }

  showAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data;
      this.showCustomersTable = true;
    });
  }

  addCustomer(): void {
    this.customerService.addCustomer(this.newCustomer).subscribe(data => {
      this.customers = [...this.customers, data]; // Immutable update
      this.newCustomer = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        loyaltyPoints: ''
      };
    });
  }

  getCustomerById(): void {
    this.customerService.getCustomerById(this.searchId).subscribe(data => {
      this.customerById = data;
    });
  }

  populateUpdateForm(customer: Customer): void {
    this.updateCustomerData = { ...customer };
  }

  updateCustomer(): void {
    if (this.updateCustomerData.id != null) {
      this.customerService.updateCustomer(this.updateCustomerData.id, this.updateCustomerData).subscribe(data => {
        // Update the customer in the array
        this.customers = this.customers.map(c =>
          c.id === data.id ? data : c
        );
        this.updateCustomerData = {
          id: 0,
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          loyaltyPoints: ''
        };
      });
    }
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customers = this.customers.filter(c => c.id !== id);
    });
  }
}


