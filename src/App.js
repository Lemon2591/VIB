import React from "react";
import Home from "./home/Home";
import HouseLandPage from "./pages/HouseLandPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routing from "./route/Routing";
import RoutePub from "./route/Route";

function App() {
  return (
    <>
      {/* <HouseLandPage /> */}
      <Router>
        <Routes>
          <Route exact={true} path="/" element={<RoutePub />}>
            {Routing.map((privateRoute, index) => {
              const { path, Component, exact } = privateRoute;
              return (
                <Route
                  key={index}
                  path={path}
                  element={<Component />}
                  exact={`${exact}`}
                />
              );
            })}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
