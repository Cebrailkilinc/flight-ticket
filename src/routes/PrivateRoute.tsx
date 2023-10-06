import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Navigate } from 'react-router-dom'
import FlightDetail from '../pages/FlightDetail';
interface Props {
    component: React.ComponentType
    path?: string

}
const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    const { toAirport, fromAirport, departureDate } = useAppSelector(state => state.home)

    if (toAirport != "" && fromAirport != "" && departureDate != "") {
        return <FlightDetail />
    }

    return <Navigate to="/" />
}

export default PrivateRoute