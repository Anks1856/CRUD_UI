import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import User from './pages/User';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<App />} />
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<User />} />
          <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
