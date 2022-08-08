
//-------------ACA EL HEADER ES LA PARTE DE ARRIBA--------

import React from "react"
import {Showmania} from "./Shows/img"; //--------ACA ESTA EL PROBLEMA DE LA FOTO del logo 

export const Header = () => {
    return (// ----------------ACA VA EL MENU 
       <header>
        <div className-="menu"> 
            <box-icon name="menu"></box-icon> 
        </div>

        <a href="#">
        <div className="logo">
        <img src={Showmania} alt="logo" width="150" />
      </div>
       </a>
       <ul>
         <li>
            <a href="#" >INICIO</a>
         </li>
         <li>SHOWS/EVENTOS</li>
       </ul> 
       
       <div className="cart" onClick={toogleMenu}> 
        <box-icon name="cart"></box-icon> 
        <span className="item__total"> {carrito.length} </span> 
      </div> 
       </header>
    );
};
//---------------------- EL CART ES EL CARRITO DE COMPRA