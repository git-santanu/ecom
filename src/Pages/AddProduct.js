import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
const AddProduct = () => {
  const [greetMsg, setGreetMsg] = useState("");
  useEffect(() => {
    greet();
  }, []);
  const greet = () => {
    let time = new Date().getHours();
    console.log("time>>>>>>", time);
    if (time > 12 && time < 14) {
      return setGreetMsg("Good Noon");
    } else if (time > 14 && time < 16) {
      return setGreetMsg("Good Afternoon");
    } else if (time > 17 && time < 20) {
      return setGreetMsg("Good Evening");
    } else if (time > 20 && time < 15) {
      return setGreetMsg("Good Night");
    } else {
      return setGreetMsg("Good Mornig");
    }
  };
  const data = localStorage.getItem("Signup info");
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <h1>Add Product Page</h1>
      {!data ? (
        navigate('/Register')
      ) : (
        <h1>
          {" "}
          {greetMsg}, {JSON.parse(data).name}
        </h1>
      )}
    </>
  );
};
export default AddProduct;
