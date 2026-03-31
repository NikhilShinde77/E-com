import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  './App.css';
import Nav from './Nav';
import Product from './com/Product.jsx';
import Add from './com/Add.jsx';
import Delete from './com/Delete.jsx';
import Update from './com/Update.jsx';




function App(){
  return(
    <div>
  
      <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path='/pro' element={<Product/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/update' element={<Update/>} />
        <Route path='/delete' element={<Delete/>} />
       
       
      </Routes>
      
      </BrowserRouter>
     
  
      </div>
  )
}
export default App;