import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Signup info")) {
      localStorage.clear();
      return navigate("/Register");
    }
  }, []);
  return <div>Logout</div>;
};

export default Logout;
