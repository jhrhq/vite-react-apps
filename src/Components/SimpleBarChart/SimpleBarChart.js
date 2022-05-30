import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useReview from "../hooks/useReview";

const SimpleBarChart = () => {
  const [reviews] = useReview("chartData.json");
  return (
    <BarChart
      width={500}
      height={300}
      data={reviews}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="investment" fill="#8884d8" />
      <Bar dataKey="sell" fill="#82ca9d" />
      <Bar dataKey="revenue" fill="#82ca9d" />
    </BarChart>
  );
};

export default SimpleBarChart;
