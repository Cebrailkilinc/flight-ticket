import React, { useState } from 'react'
import { Button, Radio } from 'antd';
import { MdFastfood } from "react-icons/md";
import { SiEthiopianairlines } from "react-icons/si";
import { BiSolidShoppingBag } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineClockCircle, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import type { RadioChangeEvent } from 'antd';
import { TiTick } from "react-icons/ti"

const Card = () => {

    const [value, setValue] = useState("eco");
    const [openCardDetail, setOpenDetail] = useState(true);
    const [openFlightType, setFlightType] = useState(true)
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };    

    return (
        <div className='flight-detail-card'>
            <div className='card-main'>
                <div className='card-main-flight-detail'>
                    <div className='flight-name'>
                        <SiEthiopianairlines />
                        <h6>Ethiopianairlines </h6>
                    </div>
                    <h6>AB-SAW-ADB</h6>
                </div>
                <div className='card-main-bag-detail'>
                    <div className='bag-size'>
                        <BiSolidShoppingBag />
                        <h6>1x15kg</h6>
                    </div>
                    <div className='bag-detail-aktarma'>1 aktarma</div>
                    <div className='bag-detail-ticket'>Özel Fiyatlı Bilet</div>
                </div>
                <div className='card-main-time'>
                    <div className='time-clock'>
                        <div className='time-clock-departure'>16.00</div>
                        <BsArrowRight />
                        <div className='time-clock-arrival'>19.15</div>
                    </div>
                    <div className='time-sequence'>
                        <AiOutlineClockCircle />
                        <h6>3sa 55dk</h6>
                    </div>
                </div>
                <div className='card-main-price'>
                    <div className='price-area'>
                        2.989,
                        <h6>99 TL</h6>
                    </div>
                    <div className='seat-warning'>
                        Son 3 koltuk
                    </div>
                </div>
                <Button  onClick={() => setFlightType(!openFlightType)}  type="primary">
                    Satın Al
                </Button>
            </div>
            <div style={{ display: openCardDetail ? "none" : "" }} className='card-detail'>
                <div>Egyptair Uçuş: MS738 Sınıfı: W </div>
                <div className='segment-airports'>
                    <div className='segment-airports-logo'>
                        <div className='logo-yuvarlak'></div>
                        <div className='logo-cizgi'></div>
                        <div className='logo-dolu'></div>
                    </div>
                    <div>
                        <h3>14:00 - 01 Oca Pazartesi - İstanbul, İstanbul Havalimanı</h3>
                        <h3>14:00 - 01 Oca Pazartesi - Ankara, Eseboğa Havalimanı</h3>
                    </div>
                </div>
                <div id='segment-airports-food'>
                    <MdFastfood color='#EAA61A' />
                    <h1>Yiyecekler ücretlidir.</h1>
                </div>
            </div>

            <div style={{ display: openFlightType ? "none" : "" }}  className='type-of-flight' >
                <div onClick={()=>{setValue("eco")}} className='eco-flight' style={{ border: value === "eco" ? "1px solid #4096FF" : "" }}>
                    <Radio className='radio' onChange={onChange} checked={value === "eco"} value={"eco"}>Eco Paket</Radio>
                    <ul className='eco-flight-conditions'>
                        <li>
                            <TiTick />
                            <h6>Ücretli Değişiklik</h6>
                        </li>
                        <li>
                            <TiTick />
                            <h6>Kesintili İade</h6>
                        </li>
                        <li>
                            <TiTick />
                            <h6>Standart Bagaj Hakkı</h6>
                        </li>
                    </ul>
                    <div className='price-area'>
                        2.989,
                        <h6>99 TL</h6>
                    </div>
                </div>
                <div onClick={()=>{setValue("extra")}} className='eco-flight' style={{ border: value === "extra" ? "1px solid #4096FF" : "" }}>
                    <Radio className='radio' onChange={onChange} checked={value === "extra"} value={"extra"}>Extra Paket</Radio>
                    <ul className='eco-flight-conditions'>
                        <li>
                            <TiTick />
                            <h6>Ücretli Değişiklik</h6>
                        </li>
                        <li>
                            <TiTick />
                            <h6>Kesintili İade</h6>
                        </li>
                        <li>
                            <TiTick />
                            <h6>Standart Bagaj Hakkı</h6>
                        </li>
                    </ul>
                    <div className='price-area'>
                        2.989,
                        <h6>99 TL</h6>
                    </div>
                </div>
                <div onClick={()=>{setValue("prime")}} className='eco-flight' style={{ border: value === "prime" ? "1px solid #4096FF" : "" }}>
                    <Radio className='radio' onChange={onChange} checked={value === "prime"} value={"prime"}>Prime Paket</Radio>
                    <ul className='eco-flight-conditions'>
                        <li>
                            <TiTick />
                            <h6>Ücretli Değişiklik</h6>
                        </li>
                        <li>
                            <TiTick />
                            <h6>Kesintili İade</h6>
                        </li>
                        <li>
                            <TiTick />
                            <h6>Standart Bagaj Hakkı</h6>
                        </li>
                        <li>
                            <TiTick />
                            <h6>Standart Bagaj Hakkı</h6>
                        </li>                      
                    </ul>
                    <div className='price-area'>
                        2.989,
                        <h6>99 TL</h6>
                    </div>
                </div>
            </div>

            <div onClick={() => setOpenDetail(!openCardDetail)} className='detail'>
                <h4>Detay</h4>
                {openCardDetail ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </div>
        </div>
    )
}

export default Card
