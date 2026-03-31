import React from 'react';
import {Link} from 'react-router-dom';
const Nav=()=>{
  return(
    <div>
      <ul className='nav'>
       
        <li><Link to="/pro">Products List</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>
       <li><Link to="/delete">Delete Product</Link></li>
      


      </ul>
    </div>
  )
}
export default Nav;