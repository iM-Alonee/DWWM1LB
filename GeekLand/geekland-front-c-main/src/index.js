import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from './views/Product';
import Products from './views/Products';
import User from './views/User';

import Help from './views/Help';
import ShoppingCart from './views/ShoppingCart';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Cgu from './views/Cgu';
import LegalInformation from './views/LegalInformation';
import PrivacyPolicy from './views/PrivacyPolicy';
import Cookies from './views/Cookies';
import Contact from './views/Contact';
import Form from './views/Form';






ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route exact path="products/:type" element={<Products />} />
        <Route exact path="products/:type/:category" element={<Products />} />
        <Route exact path="product/:id" element={<Product />} />
        <Route path="user" element={<User />} />
        <Route path="help" element={<Help />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="cgu" element={<Cgu />} />
        <Route path="legalinformation" element={<LegalInformation />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="contact" element={<Contact />} />
        <Route path="form" element={<Form />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
