import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './style.css';
import { Link } from 'react-router-dom';

const Cards = ({ contents }) => {
    const [sortedProducts, setSortedProducts] = useState([...contents.products]);
    // console.log([...contents.products])
    const [search, setSearch] = useState("");

    const onHandleAscending = () => {
        const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
    };

    const onHandleDescending = () => {
        const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
    };

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
                    <FaSearch className='ml-2 bord' onClick={handleSearch} size={30} />
                </div>
                <button style={{ marginRight: '10px' }} onClick={onHandleAscending} className='ml-[38rem] p-2 border mt-2'>Ascending</button>
                <button onClick={onHandleDescending} className=' p-2 border mt-2'>Descending</button>
            </div>
            <div className="card-container">
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
