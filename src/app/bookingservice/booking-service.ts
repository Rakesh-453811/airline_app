import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseUrl = 'http://localhost:2000/booking';

  constructor(private http: HttpClient) { }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.baseUrl}`, booking);
  }
}
