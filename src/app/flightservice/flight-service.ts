import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Flight interface definition
export interface Flight {
  id?: number;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  seatCapacity: number;
  availableSeats: number;
  status: string; // e.g., 'Scheduled', 'Cancelled', 'Delayed'
}

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl = 'http://localhost:1000/flight';

  constructor(private http: HttpClient) {}

  // Add a new flight
  addFlight(flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(`${this.baseUrl}/add`, flight).pipe(
      catchError(error => {
        console.error('Error adding flight:', error);
        return throwError(() => Error('Something went wrong while adding the flight'));
      })
    );
  }

  // Get all flights
  getAllFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.baseUrl}/all`);
  }

  // Get a flight by ID
  getFlightById(id: number): Observable<Flight> {
    return this.http.get<Flight>(`${this.baseUrl}/${id}`);
  }

  // Update a flight
  updateFlight(id: number, flight: Flight): Observable<Flight> {
    return this.http.put<Flight>(`${this.baseUrl}/update/${id}`, flight);
  }

  // Delete a flight
  deleteFlight(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}










// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Customer } from '../customerservice/customer-service';


// export interface FrequentFlyer {
//   id?: number;
//   customerId: Customer;
//   membershipNumber: string;
//   status: string;
//   pointsEarned: number;
//   tierExpiryDate: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class FrequentFlyerService {
//   private baseUrl = 'http://localhost:3000/frequentflyer';

//   constructor(private http: HttpClient) {}

//   addFrequentFlyer(ff: FrequentFlyer): Observable<FrequentFlyer> {
//     return this.http.post<FrequentFlyer>(`${this.baseUrl}/add`, ff).pipe(
//       catchError(error => {
//         console.error('Error adding FrequentFlyer:', error);
//         return throwError(() => Error('Something went wrong'));
//       })
//     );
//   }

//   getFrequentFlyerById(id: number): Observable<FrequentFlyer> {
//     return this.http.get<FrequentFlyer>(`${this.baseUrl}/${id}`);
//   }

//   getAllFrequentFlyers(): Observable<FrequentFlyer[]> {
//     return this.http.get<FrequentFlyer[]>(`${this.baseUrl}/all`);
//   }

//   updateFrequentFlyer(id: number, ff: FrequentFlyer): Observable<FrequentFlyer> {
//     return this.http.put<FrequentFlyer>(`${this.baseUrl}/update/${id}`, ff).pipe(
//       catchError(error => {
//         console.error('Error updating FrequentFlyer:', error);
//         return throwError(() => Error('Something went wrong'));
//       })
//     );
//   }

//   deleteFrequentFlyer(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
//       catchError(error => {
//         console.error('Error deleting FrequentFlyer:', error);
//         return throwError(() => Error('Something went wrong'));
//       })
//     );
//   }
// }
