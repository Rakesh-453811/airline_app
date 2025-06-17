import { Flight } from "../flightservice/flight-service";

  export interface FrequentFlyer{
    id?: number,
    customerId: Customer;
    membershipNumber: string,
    status: string,
    pointsEarned: string,
    tierExpiryDate: string

  }

  export interface Customer {
    id ?: number,
    firstName : string,
    lastName: string,
    email: string,
    phone : string,
    dateOfBirth : string,
    loyaltyPoints : string
  }

  export interface Booking {
    id ?: number,
    customerId : number,
	  flightId : Flight | undefined,
	  bookingDate : string,
	  seatNumber : string,
	  status : string
  }

  export interface BookingDTO{

    id ?: number,
    customerId : Customer,
	  flightId : Flight | undefined,
	  bookingDate : string,
	  seatNumber : string,
	  status : string
  }