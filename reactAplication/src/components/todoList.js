
import React, { useEffect, useState,useRef } from 'react'
import { useParams } from 'react-router'
// import '../css/todoList.css'


export  function ToDoList(){
   
    const [items,setItems]=useState([])
   const task =useRef(null)
   const a=useParams()
function addTask(){
    setItems([...items,task.current.value])
}
    
    return(
        <>
        <div class="container">
        <h1>My Todo List...</h1>
        <input type="text" placeholder="enter task" ref={task}></input>
        <button className="btn btn-primary" onClick={addTask}>Add task</button>
        </div>
        { 
        items ?? items.length ??
          items.map((item,index)=>{
              <div>
            <div style={{height: "50px", width:'250px', backgroundColor:'blue',border:'1px blue solid'}}>{item}</div>
            <button >delete</button>
            <button>edit</button>
            </div>
          })
        }
        </>
    )
}