import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Apartment from "./Pages/Apartment";
import Booking from "./Pages/Booking";
import Login from "./Pages/Login";
import Events from "./Pages/Events";
import Register from "./Pages/Register";
import Resort from "./Pages/Resort";
import LakeHouse from "./Pages/LakeHouse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/resort" element={<Resort />} />
          <Route path="/lake-house" element={<LakeHouse />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
