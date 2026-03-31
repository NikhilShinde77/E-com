import { useState } from 'react';
import axios from 'axios';

const Add = () => {
  const data = { name: "", age: "", email: "" };
  const [input, setInput] = useState(data);

  const hendaledata = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handelsub = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/api/user/create",input).then((data)=>{
      console.log(data);
    });
  };

  return (
    <>
      <h1>Add Product</h1>

      <form>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={hendaledata}
          placeholder="Name"
        /><br /><br />

        <input
          type="number"
          name="age"
          value={input.age}
          onChange={hendaledata}
          placeholder="Age"
        /><br /><br />

        <input
          type="email"
          name="email"
          value={input.email}
          onChange={hendaledata}
          placeholder="Email"
        /><br /><br />

        <button onClick={handelsub}>Submit</button>
      </form>
    </>
  );
};

export default Add;