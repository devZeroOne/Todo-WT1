import React from 'react';

const SingleTodo = ({item,removeTodo}) => {

const handleDelete=(id)=>{
// console.log(id)
removeTodo(id)
}

    return (
        <div>
            <h3>{item.todo}</h3>
            <button onClick={()=>handleDelete(item.id)}>delete</button>
        </div>
    );
};

export default SingleTodo;