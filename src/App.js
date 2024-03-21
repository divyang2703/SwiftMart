import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import useFetch from 'react-fetch-hook';

//pages import
import HomePage from './pages/home/HomePage';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import ProductPage from './pages/products/ProductPage';
import ProductDetails from './pages/product_details/ProductDeatils';

//components import
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// import Cards from './components/cards/Cards';

function App() {
  const { isLoading, error, data } = useFetch("https://dummyjson.com/products");
  if (isLoading) {
    return "Loading";
}

if (error) {
    return "Something went wrong";
}
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/products' element={<Cards content={data}/>}/> */}
        <Route path='/products/' element={<ProductPage content={data}/>}/>
        <Route path='/product_details/:id' element={<ProductDetails contents={data} />}/>
        <Route path='about'element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
