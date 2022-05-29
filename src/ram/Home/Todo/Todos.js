import React from 'react';
import Todo from './Todo';

const Iodos = ({data,deleteTodo}) => {
    return (
        <div>
            {
                data.map(item=><Todo deleteTodo={deleteTodo} item={item} key={item.id}/>)
            }
        </div>
    );
};

export default Iodos;