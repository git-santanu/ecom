import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
const EditProduct = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("Signup info")) {
      return navigate("/register");
    }
  }, []);
  return (
    <>
      <Header />
      <h1>Edit Product Page</h1>
    </>
  );
};
export default EditProduct;
