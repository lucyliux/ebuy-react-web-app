import './App.css';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./home";
import Banner from "./banner"
import LoginComponent from './login'
import RegisterComponent from './register'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Banner />
      <div className="container">
          <Routes>
            <Route path="/*" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
