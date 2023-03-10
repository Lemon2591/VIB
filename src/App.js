import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routing from "./route/Routing";
import RoutePub from "./route/Route";
import { pageData } from "./data";

function App() {
  return (
    <>
      {/* <HouseLandPage /> */}
      <Router>
        <Routes>
          <Route exact={true} path="/" element={<RoutePub />}>
            {Routing.map((privateRoute, index) => {
              const { path, Component, exact, dataKey, DefaultLayout } =
                privateRoute;
              const data = pageData.find((page) => page.dataKey === dataKey);
              const PageComponent = DefaultLayout ? (
                <DefaultLayout>
                  <Component pageData={data} />
                </DefaultLayout>
              ) : (
                <Component />
              );
              return (
                <Route
                  key={index}
                  path={path}
                  element={PageComponent}
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
