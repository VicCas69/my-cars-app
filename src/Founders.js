import React from "react";

function Founders({ cars }){
    return (
        <div className="cards" align="center">
            {cars.map((car)=> {
                return <div style={{margin: "2rem"}}>
                    <img src={car.founderImg} width="350px" height="350px" style={{border: "solid"}}/>
                    <h3>"{car.brand}"</h3>
                    <h2 align="center">{car.founder}</h2>
                    </div>
            })}
        </div>
    )
}

export default Founders;