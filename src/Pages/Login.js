import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("Signup info")) {
      return navigate("/add");
    }
  }, []);
  const loginHandle = async() => {
    const data = {email,password};
    console.log('>>>>',data)
    let res =await fetch('http://127.0.0.1:8000/api/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });
    res = await res.json();
    localStorage.setItem('Signup info',JSON.stringify(res));
    setEmail('');
    setPassword('')
    navigate('/add');
  };
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Login Here</h1>
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
        <button className="btn btn-primary" onClick={loginHandle}>
          {" "}
          Login
        </button>
      </div>
    </>
  );
};
export default Login;
