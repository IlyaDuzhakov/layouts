import React from "react";

export default function ShopItem({ item }) {
  const { name, price, color, img } = item;

  return (
    <div className="shop-item">
      <div className="shop-item-image">
        <img src={img} alt={name} />
      </div>
      <div className="shop-item-name">{name}</div>
      <div className="shop-item-color">{color}</div>
      <div className="shop-item-price">${price}</div>
      <button className="shop-item-button">ADD TO CART</button>
    </div>
  );
}
