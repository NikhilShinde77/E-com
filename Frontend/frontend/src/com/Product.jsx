import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Product = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/user/get")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
 

  return (
    <>
      <h1>Product</h1>

      <table border="1">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            
          </tr>
        </thead>

        <tbody>
          {users.map((e, index) => (
            <tr key={e._id}>
              <td>{index + 1}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.email}</td>           
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Product;