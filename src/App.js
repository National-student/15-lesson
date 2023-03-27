import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components';
import { Home, Users, UserSingle } from './Pages';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/users' element={<Users />}/>
      <Route path='/users/:userId' element={<UserSingle />}/>
    </Routes>
    </>
  );
}

export default App;
