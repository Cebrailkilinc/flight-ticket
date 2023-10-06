import React from 'react'
import Form from 'antd';
//design-tools
import { Select } from 'antd';

//redux-functions
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { addToAirport } from '../../../../../redux/slices/homeSlice';

const ToCity = () => {
    const dispatch = useAppDispatch();
    const { toAirport } = useAppSelector(state => state.home);

    //get-select-value
    const handleChange = (label: string, e: any) => {
        dispatch(addToAirport(e.label));
    };

    return (
        <div>
            <h3>Nereye</h3>
            <Select                
                value={toAirport}
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                onChange={handleChange}
                options={[
                    {
                        value: '1',
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
                ]}
            />
        </div>
    )
}

export default ToCity
