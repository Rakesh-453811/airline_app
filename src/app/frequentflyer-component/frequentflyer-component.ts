import { Component, OnInit } from '@angular/core';
import { Customer, FrequentFlyer } from '../models/models';
import { CustomerService } from '../customerservice/customer-service';
import { FrequentflyerService } from '../frequentflyerservice/frequentflyer-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-frequentflyer-component',
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './frequentflyer-component.html',
  styleUrls: ['./frequentflyer-component.css']
})
export class FrequentflyerComponent implements OnInit {

  frequentFlyers: FrequentFlyer[] = [];
  customers: Customer[] = [];

  newFrequentFlyer: FrequentFlyer = {
    membershipNumber: '',
    status: '',
    pointsEarned: '', 
    tierExpiryDate: '',
    customerId :{
    id : 0,
    firstName : '',
    lastName: '',
    email: '',
    phone : '',
    dateOfBirth : '',
    loyaltyPoints : ''
    }
  };

  constructor(
    private frequentFlyerService: FrequentflyerService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.loadAllCustomers();
    
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (err) => {
        console.error('Failed to load customers', err);
      }
    });
  }

  addFrequentFlyer(): void {
    this.frequentFlyerService.addFrequentFlyer(this.newFrequentFlyer).subscribe({
      next: (data) => {
        this.frequentFlyers.push(data);
        this.newFrequentFlyer = {
          
          membershipNumber: '',
          status: '',
          pointsEarned: '',
          tierExpiryDate: '',
          customerId: {

            id : 0,
    firstName : '',
    lastName: '',
    email: '',
    phone : '',
    dateOfBirth : '',
    loyaltyPoints : ''
            
          }
        };
      },
      error: (err) => {
        console.error('Failed to add frequent flyer', err);
      }
    });
  }
}






