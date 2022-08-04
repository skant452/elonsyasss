import React from 'react'
import './App.css'
import Home from './Component/Home/Home';

import Page1 from './Component/Pages/Page1'
import Page2 from './Component/Pages/Page2'
import Page3 from './Component/Pages/Page3'
import Page4 from './Component/Pages/Page4'
import Page5 from './Component/Pages/Page5'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/elonarmy" element={<Page1 />}/>
        <Route path="/elonpad" element={<Page2 />}/>
        <Route path="/token" element={<Page3 />}/>
        <Route path="/tier" element={<Page4 />}/>
        <Route path="/bottom" element={<Page5 />}/>
        
        </Routes>
  
    </BrowserRouter>
    </div>
  )
}

export default App
