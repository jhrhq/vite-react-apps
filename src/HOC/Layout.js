import React from "react";
import Footer from "../Components/Header_Footer/Footer";
import Header from "../Components/Header_Footer/Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <h2>{props.children}</h2>
      <Footer />
    </div>
  );
};

export default Layout;
