import React from "react";
import { Row, Typography } from "antd";

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
