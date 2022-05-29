import React from 'react';
import SingleTodo from './SingleTodo';

const Todos = ({ data,removeTodo }) => {
    return (
        <div>
            {
                data.map(item => <SingleTodo removeTodo={removeTodo} key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Todos;