
import React, { useEffect, useState } from 'react'
import {useCostumHook} from './costumHook'
import {hoc} from './hoc'
export const HocClock=hoc( function Clock(props){
    const{ tick}=props
 
    
    return(
        <>
        <h1>clock: {tick}</h1>
        </>
    )
}
)

export function ShowArray(){
   
    const [arr,setArr]=useState(['have','nice','day'])
    const index=useCostumHook()%arr.length

    
    return(
        <>
        <h1>{arr[index]}</h1>
        </>
    )
}