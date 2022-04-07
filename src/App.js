import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Copmonents/Header/Header';
import Home from './Copmonents/Home/Home';
import Reviews from './Copmonents/Reviews/Reviews';
import Dashboard from './Copmonents/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
        
        <Header></Header>
        
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/reviews' element={<Reviews></Reviews>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
