import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('Signup info')){
      return navigate('/add');
    }
  },[])
  const regHandle = async () => {
    const data = { name, email, password };
    let res = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });
    res = await res.json();
    console.log(">>>>>>>", JSON.stringify(res));
    localStorage.setItem('Signup info',JSON.stringify(res));
    setName('');
    setEmail('');
    setPassword('');
    navigate('/login');
  };
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Here</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="name here"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email here"
        />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password here"
        />
        <br />
        <button className="btn btn-primary" onClick={regHandle}>
          {" "}
          Register
        </button>
      </div>
    </>
  );
};
export default Register;
