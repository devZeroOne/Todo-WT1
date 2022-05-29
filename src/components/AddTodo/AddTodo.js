import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddTodo = ({setData}) => {

    const [todo, setTodo] = useState({
        id: '',
        todo: ""
    })

    const handlechange = (e) => {
        const name = e.target.name;
        // const data = {
        //     ...todo,
        //     [name]: e.target.value,
        // }
        // setTodo(data)

        setTodo(prev => {
            const data = {
                ...prev,
                [name]: e.target.value,
                id:uuidv4()
            }
            return data
        })


    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(todo);

        setData(prev=>[...prev,todo])


        setTodo({id:"",todo:""})
    }



    return (
        <div className="AddTodo box">
            <form action="" onSubmit={handleSubmit}>
                <input value={todo.todo} name="todo" onChange={handlechange} type="text" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTodo;