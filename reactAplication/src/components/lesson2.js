
import { useState, useEffect, useRef } from 'react';
import React from 'react';

export function SelectCountry(props){
const {countries,selectedCountry}=props

return(<>
<select onChange={(e)=>selectedCountry(e.target.value)}>
  <option disabled selected value>Please select country:</option>
  <option>{countries[0]}</option>
  <option>{countries[1]}</option>
  <option>{countries[2]}</option>
</select>
</>)
}

export function SelectCity(props){
  const {cities,selectedCity}=props
  
  return(<>
  <select onChange={(e)=>selectedCity(e.target.value)}>
    <option disabled selected value>Please select city:</option>
    <option>{cities[0]}</option>
    <option>{cities[1]}</option>
    <option>{cities[2]}</option>
  </select>
  </>)
  }


export function SelectCountryAndCity(props){
const{name,page,city,country}=props
const countrysAndCitys={
Israel:["Jerusalem","Tel Aviv","Bney Brak"],
Usa:["New York","Washington","Stumford"],
Italy:["Venetzya","Baveno","Napoly"]
}

const [selectedCountry,setSelectedCountry]=useState(null)
const [selectedCity,setSelectedCity]=useState(null)

const countries=Object.keys(countrysAndCitys)
const cities=countrysAndCitys[selectedCountry]

function replaceCountry(country){
  setSelectedCity(null)
setSelectedCountry(country)
}

function sendDetails(){
  country(selectedCountry)
  city(selectedCity)
  page(3)
}

return(
    <>
    <h1>hello {name} !</h1>
    <h3>you selected {selectedCountry} / {selectedCity}</h3>
    <SelectCountry countries={countries} selectedCountry={replaceCountry}></SelectCountry>
    {cities &&
    <SelectCity
    cities={cities}
    selectedCity={setSelectedCity}
    ></SelectCity>}
    <button onClick={sendDetails}>OK</button>
    </>
)
}

export function Login(props){
const {name, password, page} =props

const nameRef=useRef(null)
const passwordRef=useRef(null)

function sendDetails(){
    name(nameRef.current.value)
    password(passwordRef.current.value)
    console.log(nameRef.current.value);
    page(2)
}
    
    return(
        <>
        <div>name: <input type="text" ref={nameRef}></input></div><br></br>
        <div>password: <input type="password" ref={passwordRef}></input></div><br></br>
        <button onClick={sendDetails}>login</button>
        </>
    )
    }

export  function ViewDetails(props) {
 
const [name,setName]=useState(null)
const [password,setPassword]=useState(null)
const [country,setCountry]=useState(null)
const [city,setCity]=useState(null)
const [page,setPage]=useState(1)



  return (
    <>
 {page==1?<Login name={setName} password={setPassword} page={setPage} city={setCity}></Login>
 :page==2?<SelectCountryAndCity name={name} page={setPage} city={setCity} country={setCountry}></SelectCountryAndCity>
 :page==3?<><h1>user profil : </h1>
 <h3>name : {name}</h3>
 <h3>password : {password}</h3>
 <h3>live in : {city}, {country}</h3>

 </>:<h1></h1>}
    </>





  );
}

