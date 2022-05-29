import React, { useState } from 'react'
import NewTodo from './Todo/NewTodo'
import Todos from './Todo/Todos'




export default function Yome() {
    const [data,setData]=useState([]);
console.log(data)

const handleDeleteTodo=(id)=>{
    const filtered=data.filter((todo)=>todo.id!==id)
    setData(filtered)
}
  return (
    <div>
        <NewTodo setData={setData}/>
        <Todos deleteTodo={handleDeleteTodo} data={data}/>
    </div>
  )
}
