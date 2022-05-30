import React from "react";
import SimpleBarChart from "../SimpleBarChart/SimpleBarChart";
import StackdChart from "../StackdChart/StackdChart";

const Dashboard = () => {
  return (
    <div>
      <StackdChart></StackdChart>
      <SimpleBarChart />
    </div>
  );
};

export default Dashboard;
