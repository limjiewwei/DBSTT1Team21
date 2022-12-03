/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Header from  './components/Header'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'
import PrivateRoutes from './RouteGuard'
function App() {
  return (
    /*
    <div className='container'>
    <Routes>
               <Route
                   exact
                   path="/"
                   element={Home}
               />
               <Route
                   path="/register"
                   element={Register}
               />
               <redirect to="/" />
           </Routes>
           </div>
           */
           /*
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>*/
            <><Header/>
              <Routes>
                <Route element={<PrivateRoutes/>}>
                  <Route path="/" element={<Home />} />
                </Route>
                
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />}/>
              </Routes>
              </>
          
  );
}
export default App;