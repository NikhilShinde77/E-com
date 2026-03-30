import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import  './App.css';


import Nav from './Nav';

function App(){
  return(
    <div>
  
      <BrowserRouter>
     <Nav/>
      <Routes>
       
        <Route path='/pro' element={<h1>Products</h1>} />
        <Route path='/add' element={<h1>Add Product</h1>} />
        <Route path='/update' element={<h1>Update Product</h1>} />
        <Route path='/logout' element={<h1>Logout</h1>} />
        <Route path='/profile' element={<h1>Profile</h1>} />
      </Routes>
      
      </BrowserRouter>
     
  
      </div>
  )
}
export default App;