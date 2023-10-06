import React, { useEffect, useState } from 'react';
import FromCity from './components/FromCity';
import ToCity from './components/ToCity';
import "./styles/flightForm.scss";
import { LiaExchangeAltSolid } from "react-icons/lia"
import Departure from './components/Departure';
import Return from './components/Return';
import PassengerMenu from './components/PassengerMenu';
import { Alert, Button, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { cleanReturnDate, oneDirectionControl } from '../../../../redux/slices/homeSlice';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  example: string
  exampleRequired: string
}

const FlightForm = () => {

  const dispatch = useAppDispatch();
  const { oneDirection, fromAirport, toAirport } = useAppSelector(state => state.home)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    dispatch(oneDirectionControl(e.target.checked))
  };

  useEffect(() => {
    dispatch(cleanReturnDate())
  }, [oneDirection])


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='home-flight-form'>
      <div className='flight-form-city'>
        <FromCity />
        <LiaExchangeAltSolid className='change-icon' />
        <ToCity />
      </div>
      <div className='flight-form-date'>
        <Departure />
        <Return oneDirection={oneDirection} />
      </div>
      <div className='flight-form-area'>
        <PassengerMenu />
        <div className='flight-form-area-button'>
          <Checkbox onChange={onChange}>Tek Yön</Checkbox>
        </div>
      </div>
      <div className='flight-form-send-button' >
        <Button type="primary" htmlType='submit' >Seferleri Göster</Button>
      </div>
      <div className='flight-form-alert' >
     
        
      </div>
    </form>
  )
}

export default FlightForm
