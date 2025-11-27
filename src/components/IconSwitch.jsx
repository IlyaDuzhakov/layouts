import React from "react";

export default function IconSwitch({ icon, onSwitch }) { // деструктуризация пропсов
    // console.log("ICON:", icon); 
  return (
    <div className="toolbar">
      <span className="material-icons icon-switch" onClick={onSwitch}> 
        {icon}
      </span>
    </div>
  );
}

// <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> - превращает текст в иконку


//  material-icons служебный класс Google
//  icon-switch - собственный класс