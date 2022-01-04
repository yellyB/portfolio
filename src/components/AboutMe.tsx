import React from "react";
import { Row, Col, Button, Typography } from "antd";
import {
  MobileOutlined,
  MailOutlined,
  GlobalOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const AboutMe = () => {
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
          />
          <Text className="aboutme_textsize">WebSite</Text>
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<GithubOutlined className="aboutme_textsize" />}
            className="aboutme_btn"
          />
          <Text className="aboutme_textsize">GitHub</Text>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AboutMe;
