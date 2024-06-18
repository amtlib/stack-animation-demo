import React from 'react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';
import { AnimatedRoutes } from './components/AnimatedRoutes';

function App() {
  return (
    <MemoryRouter>
    <AnimatedRoutes>
      <Route element={<Page1 />} path='/' />
      <Route element={<Page2 />} path='/page2' />
      <Route element={<Page3 />} path='/page3' />
    </AnimatedRoutes>
    </MemoryRouter>
  );
}

export default App;
