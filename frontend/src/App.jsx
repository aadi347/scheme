import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import SchemeDetails from './Pages/SchemeDetails';

const  App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schemeDetails" element={<SchemeDetails />} />
    </Routes>
  </Router>
  )
}

export default App;