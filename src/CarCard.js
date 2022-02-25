import React from "react";

function CarCard({ img, brand, model, year}){
    return (
        <div className="card">            
            <img src={img} width="350px" height="300px"/>
            <li>Brand: {brand}</li>
            <li>Model: {model}</li>
            <li>Year: {year}</li>
        </div>
    )
}

export default CarCard;