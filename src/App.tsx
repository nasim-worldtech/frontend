import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import LoginHistory from './pages/LoginHistory/LoginHistory';
import Users from './pages/Users/Users';
import ProtectedRoute from './protectedRoutes/ProtectedRoute';
import DefaultLayout from './layout/DefaultLayout';
import ECommerce from './pages/Dashboard/ECommerce';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return loading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DefaultLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/"
            element={
              <>
                <ProtectedRoute>
                  <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                  <ECommerce />
                </ProtectedRoute>
              </>
            }
          />
          <Route
            path="/users"
            element={
              <>
                <PageTitle title="User Table" />
                <Users />
              </>
            }
          />
          <Route
            path="/loginHistory"
            element={
              <>
                <PageTitle title="Profile | login history" />
                <LoginHistory />
              </>
            }
          />
        </Route>
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
