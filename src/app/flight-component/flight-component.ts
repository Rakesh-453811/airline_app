import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlightService, Flight } from '../flightservice/flight-service';


@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './flight-component.html'
})
export class FlightComponent implements OnInit {

  
   
  flights: Flight[] = [];
  newFlight: Flight = {
    flightNumber: '',
    departureTime: '',
    arrivalTime: '',
    seatCapacity: 0,
    availableSeats: 0,
    status: ''
  };
  updateFlightData: Flight = {
    id: 0,
    flightNumber: '',
    departureTime: '',
    arrivalTime: '',
    seatCapacity: 0,
    availableSeats: 0,
    status: ''
  };
  flightById?: Flight;
  searchId: number = 0;

  constructor(private flightService: FlightService) {} 

  ngOnInit(): void {
    this.loadAllFlights();
  }

  loadAllFlights(): void {
    this.flightService.getAllFlights().subscribe(data => {
      this.flights = data;
    });
  }

  
  addFlight(form: NgForm): void {
    this.flightService.addFlight(this.newFlight).subscribe(data => {
      this.flights = [...this.flights, data];

      form.resetForm();
      this.newFlight = {
        flightNumber: '',
        departureTime: '',
        arrivalTime: '',
        seatCapacity: 0,
        availableSeats: 0,
        status: ''
      };
    });
  }

  getFlightById(): void {
    this.flightService.getFlightById(this.searchId).subscribe(data => {
      this.flightById = data; 
    });
  }

  populateUpdateForm(flight: Flight): void {
    this.updateFlightData = flight ;
  }

  updateFlight(): void {
    if (this.updateFlightData.id != null) {
      this.flightService.updateFlight(this.updateFlightData.id, this.updateFlightData)
        .subscribe(data => {
          this.loadAllFlights();
          this.updateFlightData = {
            id: 0,
            flightNumber: '',
            departureTime: '',
            arrivalTime: '',
            seatCapacity: 0,
            availableSeats: 0,
            status: ''
          };
        });
    }
  }

  deleteFlight(id: number): void {
    this.flightService.deleteFlight(id).subscribe(() => {
      this.flights = this.flights.filter(f => f.id !== id);
    });
  }
}
