import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      {/* <Copyright /> */}
    </>
  );
};

export default DefaultLayout;
