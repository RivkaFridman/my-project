import React,{useState,useEffect} from 'react'

export function Layout(props){

    const [currentPage,setCurrentPage]=useState(0)
    const numberOfPages=React.Children.count(props.children)

    function showCurrentPage(pageIndex){
      const child=React.Children.toArray(props.children)[currentPage]
      console.log(child);
      return React.cloneElement(child)
    }

    return(
    <>
    <button 
    disabled={currentPage==0}
     onClick={(e)=>{setCurrentPage((v)=>v-1)}}
     >&lt; preview</button>
    <button
    disabled={currentPage==numberOfPages-1}
    onClick={(e)=>{setCurrentPage((v)=>v+1)}}
    >&gt; next</button>

   {showCurrentPage(currentPage)}
    </>
    )
}