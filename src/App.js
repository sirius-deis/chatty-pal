import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader/loader';
import './App.css';

import RootLayout from './layouts/rootLayout/rootLayout';
import AuthLayout from './layouts/authLayout/authLayout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <RootLayout />
            </Suspense>
          }
        ></Route>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <AuthLayout />
            </Suspense>
          }
        ></Route>
      </Routes>
      <Loader />
    </div>
  );
}

export default App;
