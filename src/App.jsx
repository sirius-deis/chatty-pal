import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useContext } from 'react';
import Loader from './components/loader/loader';
import RootLayout from './layouts/rootLayout/rootLayout';
import AuthLayout from './layouts/authLayout/authLayout';
import StartPage from './pages/startPage/startPage';

import { SocketProvider } from './store/socketContext';
import { ThemeContext } from './store/themeContext';

const SignUp = lazy(() => import('./pages/signUpPage/signUpPage'));
const SignIn = lazy(() => import('./pages/signInPage/signInPage'));
const ResetPassword = lazy(() => import('./pages/resetPasswordPage/resetPasswordPage'));
const ChatPage = lazy(() => import('./pages/chatPage/chatPage'));

function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={themeContext.theme === 'dark' ? 'theme_dark' : ''}>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<StartPage />} />
          <Route path='/' element={<AuthLayout />}>
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
            <Route
              path='reset-password'
              element={
                <Suspense fallback={<Loader />}>
                  <ResetPassword />
                </Suspense>
              }
            />
          </Route>

          <Route
            path='chat/:chatIdParam?'
            element={
              <Suspense fallback={<Loader />}>
                <SocketProvider>
                  <ChatPage />
                </SocketProvider>
              </Suspense>
            }
          />
        </Route>
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;
