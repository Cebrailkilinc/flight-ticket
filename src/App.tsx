import NavbarLayout from "./components/navbar"
import Home from "./pages/Home"
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Payment from "./pages/Payment";
import PrivateRoute from "./routes/PrivateRoute";
import FlightDetail from "./pages/FlightDetail";

function App() {


  return (
    <div className="main-component">
      <BrowserRouter>
        <NavbarLayout />
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route
            path='/flight-detail'
            element={<PrivateRoute component={FlightDetail} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
