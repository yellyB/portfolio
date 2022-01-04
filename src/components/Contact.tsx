import React from "react";
import { Row, Col, Button, Typography } from "antd";
import {
  GlobalOutlined,
  GithubOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const Contact = () => {
  const handleOnClick = (type: string) => {
    if (type === "website") {
      window.open("https://bomoto.tistory.com/", "_blank");
    } else if (type === "github") {
      window.open("https://github.com/yellyB", "_blank");
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<MobileOutlined className="aboutme_textsize" />}
            className="aboutme_btn"
          />
          <Text className="aboutme_textsize">PHONE</Text>
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<MailOutlined className="aboutme_textsize" />}
            className="aboutme_btn"
          />
          <Text className="aboutme_textsize">Email</Text>
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<GlobalOutlined className="aboutme_textsize" />}
            className="aboutme_btn"
            onClick={() => handleOnClick("website")}
          />
          <Text className="aboutme_textsize">WebSite</Text>
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<GithubOutlined className="aboutme_textsize" />}
            className="aboutme_btn"
            onClick={() => handleOnClick("github")}
          />
          <Text className="aboutme_textsize">GitHub</Text>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Contact;
