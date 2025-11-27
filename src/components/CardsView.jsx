import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView({ cards }) { // props - cards
  return (
    <div className="cards-view">
      {cards.map((item) => (
        <ShopCard key={item.name + item.color} item={item} /> // key для списков
        // ShopCard - каждый товар одна карточка
      ))}
    </div>
  );
}
