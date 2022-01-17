import React, { useState, useEffect } from "react";
import { Row, Col, Slider, Image, Typography, Card } from "antd";
import Fade from "react-reveal/Fade";

const { Text } = Typography;

const MyFooter = () => {
  return (
    <React.Fragment>
      <Row justify="center">
        <Text
          style={{
            fontSize: 20,
            fontFamily: "nexonGothic_Bold",
            color: "#666",
            marginBottom: 30,
          }}
        >
          Portfolio Project by.yellyB
        </Text>
      </Row>
    </React.Fragment>
  );
};

export default MyFooter;
