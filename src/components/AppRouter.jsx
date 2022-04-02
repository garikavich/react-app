import React, {useState, useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import App from "../App";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Routes>
          {isAuth
            ?
            <Route path="/" element={<App/>}>
              {privateRoutes.map(route =>
                <Route
                  key={route.path}
                  element={route.element}
                  path={route.path}
                  exact={route.exact}/>
              )}
              <Route
                path="*"
                element={<Navigate to="/posts"/>}
              />
            </Route>
            :
            <Route path="/" element={<App/>}>
              {publicRoutes.map(route =>
                <Route
                  key={route.path}
                  element={route.element}
                  path={route.path}
                  exact={route.exact}/>
              )}
              <Route
                path="*"
                element={<Navigate to="/login"/>}
              />
            </Route>
          }
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default AppRouter;