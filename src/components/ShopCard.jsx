import React from "react";

export default function ShopCard({ item }) {
  const { name, price, color, img } = item;

  return (
    <div className="shop-card">
      <div className="shop-card-header">
        <span className="shop-card-name">{name}</span>
        <span className="shop-card-color">{color}</span>
      </div>

      <div className="shop-card-image">
        <img src={img} alt={name} />
      </div>

      <div className="shop-card-footer">
        <span className="shop-card-price">${price}</span>
        <button className="shop-card-button">ADD TO CART</button>
      </div>
    </div>
  );
}
