import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import CurrencySpecific from './views/currency/SpecificCurrency';

function App() {
  return (
    <BrowserRouter>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />

        <Route path="currency/:code" element={<CurrencySpecific />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
