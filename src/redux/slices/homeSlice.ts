import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlightInformation } from '../../types/type';


const initialState: FlightInformation = {
  departureDate: "",
  returnDate: "",
  fromAirport: "",
  toAirport: "",
  numberOfPassenger: {
    adult: 0,
    child: 0,
    student: 0,
  },
  oneDirection: false
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addDepartureDate: (state, actions) => {
      state.departureDate = actions.payload
    },
    addReturnDate: (state, actions) => {
      state.returnDate = actions.payload
      if (state.oneDirection === true) {
        state.returnDate = ""
      }
    },
    cleanReturnDate: (state) => {
      state.returnDate = ""
     
    },
    addFromAirport: (state, actions) => {
      state.fromAirport = actions.payload
    },
    addToAirport: (state, actions) => {
      state.toAirport = actions.payload
    },
    oneDirection: (state) => {
      state.toAirport += 1
    },
    addAdultPassenger: (state) => {
      state.numberOfPassenger.adult += 1
    },
    removeAdultPassenger: (state) => {
      if (state.numberOfPassenger.adult>0) {
        state.numberOfPassenger.adult -= 1
      }
      
    },
    addChildPassenger: (state) => {
      state.numberOfPassenger.child += 1
    },
    removeChildPassenger: (state) => {
      state.numberOfPassenger.child>0 ?
      state.numberOfPassenger.child -= 1 : null
    },
    addStudentPassenger: (state) => {
      state.numberOfPassenger.student += 1
    },
    removeStudentPassenger: (state) => {
      state.numberOfPassenger.student > 0 ?
      state.numberOfPassenger.student -= 1 : null
    },
    oneDirectionControl: (state,actions) => {
      state.oneDirection = actions.payload
    },
  },
});

export const { 
  addDepartureDate, 
  addReturnDate, 
  addFromAirport, 
  addToAirport, 
  removeAdultPassenger, 
  addAdultPassenger,
  removeStudentPassenger,
  addStudentPassenger,
  addChildPassenger,
  removeChildPassenger,
  cleanReturnDate,
  oneDirectionControl
 } = homeSlice.actions;
export default homeSlice.reducer;
