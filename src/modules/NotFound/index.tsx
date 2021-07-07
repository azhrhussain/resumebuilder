import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
const NotFound = () => (
  <Row>
    <Col span={24}>
      <div>
        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
      </div>
    </Col>
  </Row>
);

export default NotFound;
