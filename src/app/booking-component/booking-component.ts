import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Booking, Customer } from '../models/models';
import { CustomerService } from '../customerservice/customer-service';
import { Flight, FlightService } from '../flightservice/flight-service';
import { BookingService } from '../bookingservice/booking-service';
import { CustomerComponent } from '../customer-component/customer-component';

@Component({
  selector: 'app-booking-component',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './booking-component.html',
  styleUrl: './booking-component.css'
})
export class BookingComponent {
  bookingList: Booking[] = []; 
  customers: Customer[] = [];
  flights: Flight[] = [];
  
  newBooking = {
    customerId : 0,
    flightId: undefined,
    bookingDate: '',
    seatNumber: '',
    status: ''
  };
  newBookingDTO = {
    
    flightId: undefined,
    bookingDate: '',
    seatNumber: '',
    status: '',
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

  
  }

  constructor(
    private customerService: CustomerService,
    private flightService: FlightService,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.loadAllCustomers();
    this.loadAllFlights();
  }

  loadAllFlights() {
    this.flightService.getAllFlights().subscribe({
      next: (data) => {
        this.flights = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
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

  addBooking(): void {
    this.bookingService.addBooking(this.newBooking).subscribe({
      next: (response) => {
        console.log('Booking added:', response);
        this.bookingList.push(response); // Add new booking to the list
        this.resetForm();
      },
      error: (err) => {
        console.error('Error adding booking:', err);
      }
    });
    //console.log('Booking data (before subscription):', this.newBooking);
  }

  resetForm(): void {
    this.newBooking = {
      customerId: 0,
      flightId: undefined,
      bookingDate: '',
      seatNumber: '',
      status: ''
    };
  }
}
