/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../components/assets/heroimage.png";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center py-2 text-4xl lg:text-5xl">Swift Mart</h1>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 mt-5">
        <img src={heroImage} alt="hero image" className="border mt-10 mx-auto lg:mt-0 lg:ml-20 h-[300px] w-full lg:w-auto lg:h-[400px]" />
        <div className="lg:ml-10 lg:mr-20">
          <p className="mt-6 lg:mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus autem alias, voluptatum numquam porro dolor voluptate facilis fuga corrupti ipsa quod qui tempora, tenetur quasi! Accusantium repellendus labore id architecto consectetur tempore vel aliquam quas magnam est nobis neque nisi laudantium, aspernatur tempora nesciunt sed suscipit alias inventore. Libero!
          </p>
          <Link to="/products">
              <button className="block mx-auto mt-6 lg:mt-10 mb-4 border p-2">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
