export interface FlightInformation {
    departureDate: any;
    returnDate: any;
    fromAirport:any;
    toAirport:any;
    numberOfPassenger:{
      adult:number,
      child:number,
      student:number,
    }
    oneDirection:boolean
  }