import { useState } from 'react';

//design-tools
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Space } from 'antd';

//redux-funcito
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { addDepartureDate } from '../../../../../redux/slices/homeSlice';
import { useForm, Controller } from 'react-hook-form';


type Inputs = {
    example: string
    exampleRequired: string
}
const Departure = () => {

    const dispatch = useAppDispatch();
    const { departureDate } = useAppSelector(state => state.home)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        dispatch(addDepartureDate(date))
    };
    //setDepartureData(departureData?.add(1, "day")) 

    return (
        <div>
            <h3>Gidiş Tarihi:</h3>
            <Space direction="vertical">
                <DatePicker
                    format={"YYYY-MM-DD"}
                    placeholder='Gidiş Tarihi'
                    value={departureDate}
                    onChange={onChange} />
            </Space>
        </div>
    )
}

export default Departure
