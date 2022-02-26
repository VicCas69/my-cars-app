import React, { useState } from "react";

function NewCarForm({handleSubmit, handleNewCar}){
    const [formData, setFormData] = useState({
        brand: "",
        model:"",
        img:"",
        year: "",
        founder: "",
        founderImg: ""
    });

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    //console.log(formData)

    function handleSubmit(e){
        e.preventDefault();
        //e.target.reset()
        const newCar = {
            brand: formData.brand,
            model: formData.model,
            img: formData.img,
            year: formData.year,
            founder: formData.founder,
            founderImg: formData.founderImg
        }

        fetch("http://localhost:3000/cars",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data => handleNewCar(data))
    }

    //console.log(formData)

    return (
        <div align="center">
            <form onSubmit={handleSubmit}>
                <label style={{marginTop: "1rem"}}>Brand</label>
                <input 
                type="text" 
                name="brand"                  
                value={formData.brand} 
                onChange={handleChange} required/>
                <label>Model</label>
                <input 
                type="text" 
                name="model" 
                value={formData.model} 
                onChange={handleChange} required/>
                <label>Image</label>
                <input 
                type="text" 
                name="img"                  
                value={formData.img} 
                onChange={handleChange} required/>
                <label>Year</label>
                <input 
                type="number" 
                name="year"   
                value={formData.year} 
                onChange={handleChange} required
                />
                <label>Founder</label>
                <input 
                type="text" 
                name="founder"                  
                value={formData.founder} 
                onChange={handleChange} required
                />
                <label>Founder Image</label>
                <input 
                type="text" 
                name="founderImg"                  
                value={formData.founderImg} 
                onChange={handleChange} required
                /><p></p>
                <button type="submit">Add Car</button>
            </form>
        </div>
    )
}

export default NewCarForm;