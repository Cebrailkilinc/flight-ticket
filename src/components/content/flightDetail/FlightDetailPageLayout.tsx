import React from 'react';

//Components
import SideMenu from './components/SideMenu';
import Card from './components/Card';

//Styles
import "./styles/flightDetail.scss";
import { Button, Radio, Dropdown } from 'antd'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg"
import type { MenuProps } from 'antd';

//redux-funtions
import { useAppSelector } from '../../../app/hooks';
import { handleDateFormat } from '../../../utilities/dateFormat';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
]
const FlightDetailPageLayout = () => {

    const { returnDate, departureDate, numberOfPassenger, fromAirport, toAirport } = useAppSelector(state => state.home)

    const formattedDepartureDate = handleDateFormat(departureDate)
    const formattedReturnDate = handleDateFormat(returnDate)

    return (
        <div className='flight-detail-container'>
            <div className='flight-detail-top-menu' >
                <div className='flight-detail-top-menu-items'>
                    <h1>{fromAirport} - {toAirport},</h1>
                    <h1>{formattedDepartureDate}-{formattedReturnDate}</h1>
                    <h1>{numberOfPassenger.adult + numberOfPassenger.child + numberOfPassenger.student} Yolcu,</h1>
                    <h1>Ekonomi</h1>
                </div>
                <div>Aramayı düzenle</div>
            </div>
            <div className='flight-detail-layout'>
                <div className='flight-detail-left-area'>
                    <div>
                        <Button type='primary' style={{ width: "100%" }}>Aramayı Favorilerine Ekle</Button>
                    </div>
                    <div className='flight-detail-side-menu'><SideMenu /></div>
                </div>
                <div className='flight-detail-right-area' >
                    <div className='flight-list-date'>
                        <Button size="small" className='' >
                            <MdOutlineArrowBackIosNew size={10} />
                            Önceki Gün
                        </Button>
                        <h1>{formattedDepartureDate}</h1>
                        <Button size="small">
                            Sonraki Gün
                            <MdOutlineArrowForwardIos size={10} />
                        </Button>
                    </div>
                    <div className='flight-detail-filter'>
                        <Radio.Group >
                            <Radio.Button value="large">En Ucuz</Radio.Button>
                            <Radio.Button value="small">En Hızlı</Radio.Button>
                        </Radio.Group>
                        <Dropdown className='filter-dropdown-menu' menu={{ items }} placement="bottom">
                            <Button id='filter-dropdown-menu-button' >
                                <CgDetailsMore />
                                <div>Daha Fazla</div>
                            </Button>
                        </Dropdown>
                    </div>
                    <Card />
                </div>

            </div>
        </div>
    )
}

export default FlightDetailPageLayout
