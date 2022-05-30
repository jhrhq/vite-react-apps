import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const Blogs = () => {
  return (
    <Row>
      <div className="my-4">
        <h1 className="display-1 text-center text-uppercase">blogs</h1>
      </div>
      <Col md={8}>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>what is Context Api?</Accordion.Header>
            <Accordion.Body>
              Context Api can provide a data to all components down the line no
              matter how deeply nested that component may be without sharing
              porps. We have to send a data through props which is (called props
              drilling) very complicated for some deeply nested components. But
              we can share that data easily with Context Api while some of the
              nested components do not have to know about that data. Context API
              is ideal for theming, user language, authentication, etc.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is a Semantic tag?</Accordion.Header>
            <Accordion.Body>
              Semantic HTML elements accurately descibe the purpose of the
              element and the type of content inside them.Elements such as
              &lt;header&gt; , &lt;footer&gt; and &lt;article&gt; are all
              considered semantic element because they describe their meaning in
              human and machine-readable way.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
      <Col md={4}>
        <Image src={"images/context_api.jpg"} alt="context_api" fluid />
      </Col>
    </Row>
  );
};

export default Blogs;
