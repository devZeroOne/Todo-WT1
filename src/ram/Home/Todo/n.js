import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid"
const JNewTodo = ({setData}) => {

    const [todo,setTodo]=useState({
        title:"",
        desc:"",
        id:""
    })
    const {title,desc}=todo;
const handleSubmit=(e)=>{
e.preventDefault();
setTodo({
    title:"",
    desc:"",
    id:uuidv4()
})
setData(prev=>[...prev,todo])

}
const handlechange=(e)=>{
    const name=e.target.name;
    setTodo((prev)=>{
        return {...prev,[name]:e.target.value};
    })
}

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input value={title} onChange={handlechange} type="text" id="title" placeholder="title"name="title"/>
                <input value={desc} onChange={handlechange} type="text" id="desc" placeholder="desc"name="desc"/>
            <button type="submit">add</button>
            
            </form>
        </div>
    );
};

export default JNewTodo;