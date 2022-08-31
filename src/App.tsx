import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { TodoForm } from './components/TodoForm/TodoForm';


const App: React.FC = () => {
  return (
  <>
      <Navbar></Navbar>
      <div className="container">
        <TodoForm />
      </div>
  </>
  )
}

export default App;
