import React, { useState, useEffect } from "react";
import { Image } from "antd";
import Typist from "react-typist";

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
        <Typist>
          Animate this text.{isChanged ? "fwfewfwefef" : "12424142"}
        </Typist>
      </div>
    </React.Fragment>
  );
};

export default Home;
