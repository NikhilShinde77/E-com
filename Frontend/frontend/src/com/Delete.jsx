 import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Delete(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/user/get")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
 
 
  const deleted=(e)=>{
    axios.delete(`http://localhost:5001/api/user/delete/${e._id}`).then((data)=>{
      console.log(data);
    })

  }

  return (
    <>
      <h1>Product Deleted</h1>

      <table border="1">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Delete</th>
       
            
          </tr>
        </thead>

        <tbody>
          {users.map((e, index) => (
            <tr key={e._id}>
              <td>{index + 1}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.email}</td>
              <td onClick={()=>deleted(e)}><button>delete</button></td>   
                      
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
 export default Delete;