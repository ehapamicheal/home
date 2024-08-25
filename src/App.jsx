import React from 'react'
import Home from './pages/home/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> */}
    <div className="App">
      <Home />
    </div>
    </>
  );
};

export default App;