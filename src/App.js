import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './Component/NavBar/navbar';
import Home from './Component/Home/home';
import Ahadyth from './Component/Ahadyth/ahadyth';
import Muhadarat from './Component/muhadarat/muhadarat';
import SectionQuran from './Component/Section_ Quran/quran';
import Samaei from './Component/Samaei_Section/samaei';
import Footer from './Component/Footer/footer';
import Aladhan from './Component/Aladhan/aladhan';
import Qisas from './Component/Qisas/qisas';
import img from "./Component/Assert/main-slider-bg.jpg"


function App() {

  setTimeout(
    function () {
      let loader = document.getElementById("loader")
      loader.classList.add("load")
    }, 5000);

  return (
    <BrowserRouter>
      <div
      style={{ backgroundImage: `url(${img})`}}
       className="App">
        <NavBar />
        <Home />
        <Ahadyth />
        <Muhadarat />
        <SectionQuran />
        <Qisas />
        <Routes>
          <Route exact path="/samaei" element={<Samaei />} />
        </Routes>
        <Aladhan />
        <Footer />

        {/*loader section  */}
        

        <div id="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;