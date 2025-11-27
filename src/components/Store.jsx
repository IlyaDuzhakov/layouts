import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

const products = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
  },
  {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
  },
  {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
  },
];

export default function Store() {
  const [view, setView] = useState("cards");

  // view_list - Google Material Icons
  // view_module - Google Material Icons

    const icon = view === "cards" ? "view_list" : "view_module";

    // в Material Icons текст превращается в КАРТИНКУ-ИКОНКУ. - view_list; view_module 
  
  // if else
//   let icon;
//   if (view === "cards") {
//     icon = "view_list";
//   } else {
//     icon = "view_module";
//   }
  // обработчик переключения вида
  function handleSwitch() {
    setView((prev) => (prev === "cards" ? "list" : "cards"));
    
//     setView((prev) => {
//   if (prev === "cards") {
//     return "list";
//   } else {
//     return "cards";
//   }
// });

  }

  return (
    <div className="store">
        {/* передаем в IconSwitch icon={icon} */}
      <IconSwitch icon={icon} onSwitch={handleSwitch} />   

      {view === "cards" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
}
