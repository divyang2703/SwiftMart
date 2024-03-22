import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './style.css';
import { Link } from 'react-router-dom';

const Cards = ({ contents }) => {
    const [sortedProducts, setSortedProducts] = useState([...contents.products]);
    const [search, setSearch] = useState("");

    const onHandleAscending = () => {
        const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
    };

    const onHandleDescending = () => {
        const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
    };

    const onHandleChange = (e) =>{
        let selection = e.target.value
        if(selection === "Ascending"){
            onHandleAscending();
        }else{
            onHandleDescending();
        }
    }

    const handleSearch = () => {
        const filtered = contents.products.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
        setSortedProducts(filtered);
    };

    return (
        <>
            <div>
                <div className='flex justify-center items-center '>
                    <input
                        type='text'
                        placeholder='enter your search'
                        value={search}
                        className='border border-black w-auto p-2 lg:w-[500px]'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className='ml-2' onClick={handleSearch} size={30} />
                    <select onChange={onHandleChange} className='border p-2 ml-32 mt-2 '>
                        <option value="Select">Select your options</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </div>
            </div>
            <div className="card-container mt-10">
                {sortedProducts.map((product, index) => (
                    <div key={index} className="card">
                        <Link to ={`/product_details/${product.id}`}><img src={product.images[0]} alt={product.title} style={{ width: '100%' }} /></Link>
                        <h1>{product.title}</h1>
                        <p className="price">{"$" + product.price}</p>
                        <p>{product.description}</p>
                        <p style={{ marginTop: '20px' }}>
                            <Link to={`/product_details/${product.id}`}>
                                <button>More Details</button>
                            </Link>
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Cards;
