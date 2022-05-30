import React from "react";
import { Col, Row } from "react-bootstrap";
import SimpleBarChart from "../SimpleBarChart/SimpleBarChart";
import StackdChart from "../StackdChart/StackdChart";

const Dashboard = () => {
  return (
    <Row>
      <Col md={6} className=" mr-1">
        <SimpleBarChart />
      </Col>
      <Col md={6} className=" ml-1">
        <StackdChart></StackdChart>
      </Col>
    </Row>
  );
};

export default Dashboard;
