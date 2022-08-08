import React from "react"
import {IMG} from "./" //ACA VA LA IMAGEN DEL PRODUCTO


export const ShowsList = () => {
    return (
        <div>
            <h1 className="title"> Eventos disponibles:</h1>
            <div className="shows"> 
            <a href="">
            <div className="show__img">
                <img src={IMG} alt=""/>
                </div>
            </a>
            <div className="show__footer">
        <h1>{title}</h1>
        <p>{category}?/o poder elegir cual evento ir</p>
        <p className="price">$1,200{price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
        <Link to={`/producto/${id}`} className="btn">Vista</Link>
        </div>
      </div>
               
                </div>
        </div>
    )
}