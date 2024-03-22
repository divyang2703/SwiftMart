import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import useFetch from "react-fetch-hook";

//pages import
import HomePage from "./pages/home/HomePage";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import ProductPage from "./pages/products/ProductPage";
import ProductDetails from "./pages/product_details/ProductDeatils";

//components import
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


function App() {
  const [products, setProducts] = useState("")

  const fetchApi = () => {
    try {
      fetch(process.env.REACT_APP_URI + "/api").then((response)=> response.json()).then((data)=>{
        setProducts(data)
        console.log(data); 
      })
    } catch (error) {
      console.error("Error fetching data:", error);
      
    }
  };
  useEffect(() => {
    fetchApi(); 
  }, []); 
  
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path='/products' element={<Cards content={data}/>}/> */}
        <Route path="/products/" element={<ProductPage content={products} />} />
        <Route
          path="/product_details/:id"
          element={<ProductDetails contents={products} />}
        />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
