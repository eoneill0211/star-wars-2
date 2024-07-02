import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dotenv from 'dotenv';
import './App.css'
import Characters from './components/Characters'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

//import Sock from "./components/Sock";
//import promo_data from './assets/promo.json';
//import Footer from "./components/Footer";
//import Search from "./components/Search";
//import Promotion from "./components/Promotion";
//import Home from "./components/Home";
//import About from "./components/About";
//import Featured from "./components/Featured";
//import AddSock from "./components/AddSock";
//import sock_data from './assets/sock.json';



  function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TSE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
              </li>
              <li className="nav-item dropdown">
                  <Link className="nav-link" to="/add">
                    Add Sock
                  </Link>
                </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            {/* <Search setData={setData} /> */}
          </div>
        </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div className="container-fluid">
          <div className="row">
            {/* <Featured data={promo_data} /> */}
            <Routes>
            <Route exact path="/" element={<Characters />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/add" element={<AddSock />} /> */}
            </Routes>
            <footer className={import.meta.env.VITE_ENVIRONMENT === "development" ? "bg-yellow" : import.meta.env.VITE_ENVIRONMENT === "production" ? "bg-green" : ""}>
              <div><strong>{import.meta.env.VITE_ENVIRONMENT.toUpperCase()}</strong></div>
            </footer>
          </div>
        </div>
      </main>
    </BrowserRouter>
  )
  }

export default App;
