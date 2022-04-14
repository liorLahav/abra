import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";

import Alert from "./components/UI/alert/alert";
import Loading from "./components/UI/loading/loading";
const Main = React.lazy(() => import("./components/mainPage/main"));
const Favorites = React.lazy(() => import("./components/favorites/favorites"));

function App() {
  const AlertText = useSelector((state) => {
    return state.alert;
  });
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="favorites"
          element={
            <Suspense fallback={<Loading />}>
              <Favorites />
            </Suspense>
          }
        ></Route>
      </Routes>
      {AlertText !== "" && <Alert />}
    </div>
  );
}

export default App;
