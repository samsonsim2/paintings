import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paintings from './Paintings';
import PaintingsXR from './PaintingsXR';
import XrHitCubeContainer from './XrHitCubeContainer';
import Galaxy from './Galaxy';
 
 
 
const App = () => {

  return (
 
  <BrowserRouter>
  
   <Routes>
      {/* <Route path="/" element={<Paintings/>}/> */}
      <Route path="/" element={<Galaxy/>}/>
      <Route path="/xr" element={<XrHitCubeContainer/>}/>
 
       
  </Routes>  
  </BrowserRouter>
  
  )
}

export default App