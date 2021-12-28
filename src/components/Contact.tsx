import React from "react";
import { Button, Tooltip } from "antd";
import {
  GlobalOutlined,
  GithubOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";

const Contact = () => {
  const handleOnClick = (type: string) => {
    if (type === "website") {
      window.location.href = "https://bomoto.tistory.com/";
    } else if (type === "github") {
      window.location.href = "https://github.com/yellyB";
    }
  };

  return (
    <React.Fragment>
      <Tooltip title="website">
        <Button
          type="primary"
          shape="circle"
          icon={<GlobalOutlined />}
          onClick={() => handleOnClick("website")}
        />
      </Tooltip>
      <Tooltip title="github">
        <Button
          type="primary"
          shape="circle"
          icon={<GithubOutlined />}
          onClick={() => handleOnClick("github")}
        />
      </Tooltip>
      <Tooltip title="kk3p1q1@gmail.com">
        <Button type="primary" shape="circle" icon={<MailOutlined />} />
      </Tooltip>
      <Tooltip title="010.7448.4171">
        <Button type="primary" shape="circle" icon={<MobileOutlined />} />
      </Tooltip>
      {/* <GlobalOutlined onClick={() => handleOnClick("website")} />
      <GithubOutlined onClick={() => handleOnClick("github")} />
      <MailOutlined />
      <MobileOutlined /> */}
    </React.Fragment>
  );
};

export default Contact;
