import {React,useEffect,useState } from 'react'

export default function Show(){

const [imagesArr,setImages]=useState([,])
const [imagest,setImagest]=useState([1,2,3,4])
const [c,setC]=useState()

useEffect(async()=>{

    let response=await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    let images=await response.json()
    console.log(images.drinks)
    // let arr=images.drinks
    // console.log(arr);
  await  setImages([...imagesArr,images.drinks])
  console.log(imagesArr);
  console.log(imagest);
    //setImages(imagesArr.concat(imagesArr,images))
},[])
useEffect(()=>{

},[imagesArr])


    return(
        <>
        <p>{imagesArr}</p>
             {imagesArr? imagesArr.length>2 ?  <ul>
             <h4>{imagesArr}</h4>
{imagesArr.map(item => (
  <li >
    <label>
      {item}
    </label>
  </li>
))}
</ul> : <p>לא מצאתי עדיין...</p>:<h3>null</h3>

}
       
        
        </>
    )
}