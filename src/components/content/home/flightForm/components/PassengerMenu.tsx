import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { Select, Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import {
    addAdultPassenger,
    removeAdultPassenger,
    addChildPassenger,
    removeChildPassenger,
    addStudentPassenger,
    removeStudentPassenger
} from '../../../../../redux/slices/homeSlice';
const PassengerMenu = () => {

    const [openPassengerDetail, setOpenPassengerDetail] = useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();
    const { adult,child,student } = useAppSelector(state => state.home.numberOfPassenger)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent<Document>) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenPassengerDetail(false);
            }
        };
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpenPassengerDetail(false);
            }
        }
        if (openPassengerDetail) {
            document.addEventListener('click', handleClickOutside as unknown as EventListener);
            document.addEventListener('keydown', handleEscKey);
        } else {
            document.removeEventListener('click', handleClickOutside as unknown as EventListener);
            document.removeEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside as unknown as EventListener);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [openPassengerDetail])

    return (
        <div className='flight-form-passenger' ref={dropdownRef}>
            <h3>Yolcu Sayısı</h3>
            <div style={{ position: "relative" }}>
                <h6 style={{
                    border: `1px solid ${openPassengerDetail ? "#BFBFBF" : "#5D92EB"}`,
                    borderRadius: "5px",
                    width: "190px",
                    padding: "5px",
                    cursor: "pointer",
                    color: "#53605E",

                }}
                    onClick={() => { setOpenPassengerDetail(!openPassengerDetail) }}
                >Yolcu seç</h6>
                <div style={{
                    display: openPassengerDetail ? "flex" : "none",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "10px",
                    border: "1px solid #BFBFBF",
                    borderRadius: "5px",
                    backgroundColor: "#F0F8FF",
                    marginTop: "5px",
                    position: "absolute",
                    width: "180px",
                    zIndex: "50",

                }} >
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <h1 style={{}}>Yetişkin</h1>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Button onClick={() => dispatch(addAdultPassenger())} size={'small'} type="primary" shape="circle">
                                +
                            </Button>
                            <h1 style={{ width: "20px", textAlign: "center" }}>{adult}</h1>
                            <Button onClick={() => { dispatch(removeAdultPassenger()) }} size={'small'} type="primary" shape="circle">
                                -
                            </Button>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <h1>Öğrenci</h1>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Button onClick={()=>{dispatch(addStudentPassenger())}} size={'small'} type="primary" shape="circle">
                                +
                            </Button>
                            <h1 style={{ width: "20px", textAlign: "center" }}>{student}</h1>
                            <Button onClick={()=>{dispatch(removeStudentPassenger())}} size={'small'} type="primary" shape="circle">
                                -
                            </Button>
                        </div>

                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                        <h1>Çocuk</h1>
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <Button onClick={()=>{dispatch(addChildPassenger())}} size={'small'} type="primary" shape="circle">
                                +
                            </Button>
                            <h1 style={{ width: "20px", textAlign: "center" }}>{child}</h1>
                            <Button onClick={()=>{dispatch(removeChildPassenger())}} size={'small'} type="primary" shape="circle">
                                -
                            </Button>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default PassengerMenu
