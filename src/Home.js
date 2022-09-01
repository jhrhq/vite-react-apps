import React from "react";
import Layout from "./HOC/Layout";

const Home = () => {
  return (
    <div>
      <h1>Header</h1>
      <Layout>
        <p>second line</p>
      </Layout>
    </div>
  );
};

export default Home;
