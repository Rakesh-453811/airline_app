import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface Customer {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  loyaltyPoints: string; // Use number for calculations and sorting
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:3000/customer';

  constructor(private http: HttpClient) {}

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/add`, customer).pipe(
      catchError(error => {
        console.error('Error while adding Customer:', error);
        return throwError(() => Error('Something went wrong'));
      })
    );
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/${id}`);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/all`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseUrl}/update/${id}`, customer).pipe(
      catchError(error => {
        console.error('Error while updating Customer:', error);
        return throwError(() => Error('Something went wrong'));
      })
    );
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      catchError(error => {
        console.error('Error while deleting Customer:', error);
        return throwError(() => Error('Something went wrong'));
      })
    );
  }
}
