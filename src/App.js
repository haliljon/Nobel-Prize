import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EachCategory from './pages/EachCategory';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category" element={<EachCategory />}>
          <Route exact path=":categoryName" element={<EachCategory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
