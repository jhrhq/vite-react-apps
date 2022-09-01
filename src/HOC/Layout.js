import React from "react";
import Header from "../Components/Header_Footer/Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <h2>{props.children}</h2>
    </div>
  );
};

export default Layout;
