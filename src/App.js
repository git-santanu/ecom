import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import Register from "./Pages/Register";
import Logout from "./Pages/Logout";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit" element={<EditProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
