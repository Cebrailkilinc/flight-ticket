import React from 'react';

//design-tools
import { Select } from 'antd';

//redux-funcitons
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { addFromAirport } from '../../../../../redux/slices/homeSlice';

const FromCity = () => {

  const { fromAirport } = useAppSelector(state => state.home);
  const dispatch = useAppDispatch();
  const handleChange = (label: string, e: any) => {
    dispatch(addFromAirport(e.label));
    console.log(e);
  };

  return (
    <div>
      <h3>Nereden</h3>
      <Select
        value={fromAirport}
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
        onChange={handleChange}
        options={[
          {
            value: '1112',
            label: 'Not Identified',
          },
          {
            value: '2',
            label: 'Closed',
          },
          {
            value: '3',
            label: 'Communicated',
          },
          {
            value: '4',
            label: 'Identified',
          },
          {
            value: '5',
            label: 'Resolved',
          },
          {
            value: '6',
            label: 'Cancelled',
          },
        ]} />
    </div>
  );
};

export default FromCity;