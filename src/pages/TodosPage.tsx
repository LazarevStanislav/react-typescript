import React, { useEffect, useState }  from 'react'
import { TodoForm } from '../components/TodoForm/TodoForm'
import { TodoList } from '../components/TodoList/TodoList'
import { ITodo } from '../components/interfaces';

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>( [] )

  useEffect( () => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect( () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = ( title: string ) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    
    setTodos( prev => [newTodo, ...prev] ) 
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    }))
  }

  const removeHandler = ( id: number ) => {
    // const shoudRemove = window.confirm( 'Вы уверенны что хотите удалить элемент?' ) // confirm  можно вызвать через глобальный window
    const shoudRemove = confirm( 'Вы уверенны что хотите удалить элемент?' )  // а можно и указать переменную для ts
    if ( shoudRemove ) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
    </React.Fragment>
  )
}