import React, { useState, useEffect } from "react";
import { Image, Typography } from "antd";
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
        height="100%"
        src={process.env.PUBLIC_URL + "/images/homeImage.png"}
      />
      <div style={{ position: "absolute" }} key={isChanged ? "1" : "2"}>
        <Text style={{ fontSize: 30 }}>
          <Typist>Web Developer.</Typist>
        </Text>
      </div>
    </React.Fragment>
  );
};

export default Home;
