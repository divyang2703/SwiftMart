
import './styles.css'
import Rating from '../../components/Rating';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ contents }) => {
  const { id } = useParams();

  if (!contents) {
    return <div>Loading...</div>;
  }
  
  const product = contents.products.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="card1">
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Rating rating={product.rating} />
      <p className="price1">{"$" + product.price}</p>
      <button>Add to Cart</button>&nbsp;
      <button>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
