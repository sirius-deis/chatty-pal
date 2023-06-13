import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './components/loader/loader';
import './App.css';
import RootLayout from './layouts/rootLayout/rootLayout';
import StartPage from './pages/startPage/startPage';

const SignUp = lazy(() => import('./pages/signUpPage/signUpPage'));
const SignIn = lazy(() => import('./pages/signInPage/signInPage'));

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<StartPage />} />
          <Route
            path='login'
            element={
              <Suspense fallback={<Loader />}>
                <SignIn />
              </Suspense>
            }
          />
          <Route
            path='register'
            element={
              <Suspense fallback={<Loader />}>
                <SignUp />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
