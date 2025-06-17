import { Routes } from '@angular/router';
import { FlightComponent } from './flight-component/flight-component';
import { CustomerComponent } from './customer-component/customer-component';
import { combineLatest } from 'rxjs';
import { Component } from '@angular/core';
import { FrequentflyerComponent } from './frequentflyer-component/frequentflyer-component';
import { BookingComponent } from './booking-component/booking-component';


export const routes: Routes = [

    {path:'flight-section', component:FlightComponent},
    {path:'customer-section', component:CustomerComponent},
    {path:'frequentflyer-section',component:FrequentflyerComponent},
    {path:'booking-section',component:BookingComponent}
    ];