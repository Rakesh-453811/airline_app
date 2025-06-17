import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FrequentFlyer } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrequentflyerService {

  private baseUrl = 'http://localhost:3000/frequentflyer';

  constructor(private http: HttpClient) { }

  addFrequentFlyer(frequentFlyer: FrequentFlyer): Observable<FrequentFlyer> {
    return this.http.post<FrequentFlyer>(`${this.baseUrl}/add`, frequentFlyer);
  }

  
}
