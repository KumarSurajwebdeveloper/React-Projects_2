/* Original Code 

import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;     */

// Modified code

import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price }) => {
  const handleImageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top when image is clicked
  };

  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          onClick={handleImageClick}
        />
      </Link>
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Item;

