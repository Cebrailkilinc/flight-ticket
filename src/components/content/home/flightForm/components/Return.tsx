import React from 'react';

import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { addReturnDate } from '../../../../../redux/slices/homeSlice'
import dayjs from 'dayjs';

//Props interface
interface MyComponentProps {
    oneDirection: boolean;
}

const Return: React.FC<MyComponentProps> = ({ oneDirection }) => {

    const dispatch = useAppDispatch();
    const { returnDate } = useAppSelector(state => state.home)

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        dispatch(addReturnDate(date))
    };
   
     

    return (
        <div style={{ pointerEvents: oneDirection ? "none" : "all" }} >
            <h3 style={{ color: oneDirection ? "gray" : "" }} >Dönüş Tarihi:</h3>
            <Space direction="vertical">
                <DatePicker
                    value={returnDate}
                    format={'YYYY-MM-DD '}
                    placeholder='Dönüş Tarihi'
                    onChange={onChange} />
            </Space>
        </div >
    )
}

export default Return
