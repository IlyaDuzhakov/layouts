import React from "react";
import ShopItem from "./ShopItem";

export default function ListView({ items }) {
  return (
    <div className="list-view">
      {items.map((item) => (
        <ShopItem key={item.name + item.color} item={item} />
      ))}
    </div>
  );
}
