import React, { useState, useEffect } from "react";
import { Image, Typography, Row, Col } from "antd";
import Typist from "react-typist";

const { Text } = Typography;

const Home = (props: { sideKey: string }) => {
  const { sideKey } = props;

  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    setIsChanged(sideKey === "#HOME" ? true : false);
  }, [sideKey]);

  return (
    <React.Fragment>
      <Image
        preview={false}
        width="100%"
        height="100vh"
        src={process.env.PUBLIC_URL + "/images/homeImage.png"}
        style={{ opacity: "20%" }}
      />
      <Row
        style={{
          fontSize: 120,
          position: "absolute",
          marginTop: "26%",
          marginLeft: 20,
        }}
      >
        <Col span={24}>
          <Text style={{ fontFamily: "nexonGothic_Bold" }} key={isChanged}>
            <Typist>Web Developer.</Typist>
          </Text>
        </Col>
        <Col span={24}>
          <Text style={{ fontFamily: "nexonGothic_Light" }}>Kim Bomi</Text>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Home;
