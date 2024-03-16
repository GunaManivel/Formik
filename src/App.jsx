import { Form, Formik } from "formik";
import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./Components/Edit";
import Create from "./Components/Create";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Authors from "./Components/Authors";
import Createauthor from "./Components/CreateAuthor";
import EditAuthor from "./Components/EditAuthor";

const App = () => {
  const [id, setId] = useState(0);
  return (
    <div style={{ background: "#6E6E6E" }}>
      {/* <Formikexample /> */}
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home id={id} />} />
          <Route path="/products" element={<Products setId={setId} />} />
          <Route path="/authors" element={<Authors setId={setId} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/createauthor" element={<Createauthor />} />
          <Route path="/editauthor/:id" element={<EditAuthor id={id} />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
