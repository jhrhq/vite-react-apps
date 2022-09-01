import React from "react";
import Footer from "../Components/Header_Footer/Footer";
import Header from "../Components/Header_Footer/Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
