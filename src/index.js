import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import New from './pages/New';
import Product from './pages/Product';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
        </Route>
        <Route path='/new' element={<New />} />
        <Route path='/product' element={<Product />} >
          <Route path=':id' element={<Product />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

