import './App.css';
import { useEffect, useState } from 'react';
import CarsList from './CarsList';
import Filter from './Filter';
import NewCarForm from './NewCarForm';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import Founders from './Founders';

function App() {

  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  //const [dropDown, setDropDown] = useState("");

  useEffect(()=>{
    fetch("http://localhost:3000/cars")
    .then(res => res.json())
    .then(data => setCars(data))
  }, [])

  function handleSearch(e){
    setSearch(e.target.value)
  }

  /*function handleChange(e){
    setDropDown(e.target.value)
    //console.log(e.target.value)
  }*/

  function handleNewCar(car){
    setCars([...cars, car])
  }

  return (
    <div className='app'>
      <h1>Castro Auto Shop</h1>
      <NavBar/>
      <Switch>
      <Route exact path="/form">
        <NewCarForm handleNewCar={handleNewCar}/>
      </Route>
      <Route path="/founders">
        <Founders cars={cars}/>
      </Route>
      <Route path={"/"}>      
        <Filter search={search} handleSearch={handleSearch}/>      
        <CarsList cars={cars} search={search}/>
      </Route>      
      </Switch>
    </div>
  );
}

export default App;
