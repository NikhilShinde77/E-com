import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Update() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(null); // important
  useEffect(() => {
    axios.get("http://localhost:5001/api/user/get")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // CLICK UPDATE BUTTON (fill form)
  const handleUpdateClick = (user) => {
    setName(user.name);
    setAge(user.age);
    setEmail(user.email);
    setId(user._id);
  };

  // FINAL UPDATE API
  const handleUpdate = () => {
    axios.put(`http://localhost:5001/api/user/update/${id}`, {
      name,
      age,
      email
    })
    .then(() => {
      alert("Updated Successfully");

      // refresh data
      axios.get("http://localhost:5001/api/user/get")
        .then((res) => setUsers(res.data));

      // clear form
      setName("");
      setAge("");
      setEmail(""); 
      setId(null);
    })
    .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Product Update</h1>

      <table border="1">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {users.map((e, index) => (
            <tr key={e._id}>
              <td>{index + 1}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.email}</td>
              <td>
                <button onClick={() => handleUpdateClick(e)}>
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr  />

      <br />

      <div>
        <h1>update data form </h1>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />

        <button onClick={handleUpdate}>Update</button>
      </div>
    </>
  );
}

export default Update;