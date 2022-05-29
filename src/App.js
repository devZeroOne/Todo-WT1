import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/AllTodos/Todos';
import { useState } from 'react';




function App() {

  const [data, setData] = useState([])

  const removeTodo = (id) => {

    // const todos=data.filter(item=>item.id!==id)
    // setData(todos)


    setData(prev => {
      const todos = prev.filter(item => item.id !== id)
      return todos
    })

  }
  console.log(data)


  return (
    <div className='my_app'>
      <AddTodo setData={setData} />
      <Todos removeTodo={removeTodo} data={data} />


    </div>
  );
}

export default App;
