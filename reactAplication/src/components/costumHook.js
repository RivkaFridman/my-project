import React,{useEffect,useState} from 'react'

export function useCostumHook(){
    const [tick,setTick]=useState(0)
    let ticks
    useEffect(()=>{
      ticks=  setInterval(()=>{
       setTick(v=>v+1)
        },1000)
    },()=>{
        setTick(0)
        clearInterval(ticks)
    },[])
return tick
}