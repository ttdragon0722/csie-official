import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { } from 'react-router-dom';

// public
import Header from './public/components/header/header';
import Footer from './public/components/footer/footer';

// page
import Home from './page/Home/Home';
import News from './page/News/News';
import Contact from './page/Contact/Contact';
import Information from './page/Information/Information';
import About from './page/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='news' element={<News />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='information' element={<Information />}></Route>
        <Route path='about' element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
