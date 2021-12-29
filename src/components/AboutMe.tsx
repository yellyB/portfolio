import React from "react";
import { Row, Col, Button } from "antd";
import {
  MobileOutlined,
  MailOutlined,
  GlobalOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Row>
        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<MobileOutlined className="aboutme_icon" />}
            className="aboutme_btn"
          />
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<MailOutlined className="aboutme_icon" />}
            className="aboutme_btn"
          />
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<GlobalOutlined className="aboutme_icon" />}
            className="aboutme_btn"
          />
        </Col>
        <Col span={12}>
          <Button
            type="primary"
            shape="round"
            icon={<GithubOutlined className="aboutme_icon" />}
            className="aboutme_btn"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AboutMe;
