import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paintings from './Paintings';
 
 
 
const App = () => {

  return (
 
  <BrowserRouter>
  
   <Routes>
      <Route path="/" element={<Paintings/>}/>
 
       
  </Routes>  
  </BrowserRouter>
  
  )
}

export default App