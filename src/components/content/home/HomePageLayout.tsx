import React from 'react';
import FlightForm from './flightForm/FlightForm';
import "./styles/home.scss"
import { useAppSelector } from '../../../app/hooks';

const HomePageLayout = () => {

 const data =  useAppSelector(state => state.home.departureDate)
 
  console.log(data)
  return (
    <div className='home-page-layout'>
      <div>
        <FlightForm />
      </div>
      <div className='home-page-slider' >ss</div>
    </div>
  )
}

export default HomePageLayout
