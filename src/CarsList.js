import React from "react";
import CarCard from "./CarCard";

function CarsList({ cars, search }){

    //console.log(cars)
    return (
        <div className="cards">
            {cars.filter((filterCar) => filterCar.brand.toLowerCase().includes(search.toLowerCase()))
            .map((car)=>{
                return <CarCard key={car.id} brand={car.brand} img={car.img} model={car.model} year={car.year}/>
            })}
        </div>
    )
}

export default CarsList;