import React, { useState } from 'react';
import { ITodo } from './components/interfaces';
import { Navbar } from './components/Navbar/Navbar';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>( [] )
  
  const addHandler = ( title: string ) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    
    setTodos( prev => [newTodo, ...prev] )
    
  }

  return (
  <>
      <Navbar></Navbar>
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} />
      </div>
  </>
  )
}

export default App;
