import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";
// import * as products from "../products.json"; // импортировали весь модуль, но в данном случае это не нужно
import products from "../products.json" // импортировали весь массив из json файла и присвоили его в переменную products



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
