import React from 'react';

const Uodo = ({item,deleteTodo}) => {

  const handleDelete=(id)=>{
      deleteTodo(id)
  }

    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button onClick={()=>handleDelete(item.id)}>delete</button>
        </div>
    );
};

export default Uodo;