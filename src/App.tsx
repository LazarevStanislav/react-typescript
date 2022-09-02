import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';




const App: React.FC = () => {
  

  return (
  <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route element={<TodosPage />} path="/"></Route>
          <Route element={<AboutPage />} path="/about"></Route>
      </Routes>
      </div>
  </BrowserRouter>
  )
}

export default App;
