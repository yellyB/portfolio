import React from "react";
import { Row, Col, Button, Typography, Tooltip } from "antd";
import {
  MobileOutlined,
  MailOutlined,
  GlobalOutlined,
  GithubOutlined,
  UserOutlined,
  DiffOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

const AboutMe = () => {
  const handleLinkIconOnClick = (type: string) => {
    if (type === "webSite") {
      window.open("https://bomoto.tistory.com", "_blank");
    } else if (type === "gitHub") {
      window.open("https://github.com/yellyB", "_blank");
    }
  };

  return (
    <React.Fragment>
      <Row justify="center">
        <Col span={16}>
          <Row>
            <Col span={3}>
              <Button
                type="primary"
                shape="round"
                icon={<UserOutlined className="aboutme_textsize" />}
                className="aboutme_btn"
              />
            </Col>
            <Col span={7}>
              <Text className="aboutme_textsize">NAME</Text>
            </Col>
            <Col span={14}>
              <Text className="aboutme_textsize_content">김보미</Text>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Button
                type="primary"
                shape="round"
                icon={<MobileOutlined className="aboutme_textsize" />}
                className="aboutme_btn"
              />
            </Col>
            <Col span={7}>
              <Text className="aboutme_textsize">PHONE</Text>
            </Col>
            <Col span={14}>
              <Text className="aboutme_textsize_content">010.7448.4171</Text>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Button
                type="primary"
                shape="round"
                icon={<MailOutlined className="aboutme_textsize" />}
                className="aboutme_btn"
              />
            </Col>
            <Col span={7}>
              <Text className="aboutme_textsize">Email</Text>
            </Col>
            <Col span={14}>
              <Text className="aboutme_textsize_content">
                kk3p1q1@gmail.com
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Button
                type="primary"
                shape="round"
                icon={<GlobalOutlined className="aboutme_textsize" />}
                className="aboutme_btn"
              />
            </Col>
            <Col span={7}>
              <Text className="aboutme_textsize">WebSite</Text>
            </Col>
            <Col span={14}>
              <Text className="aboutme_textsize_content">
                bomoto.tistory.com
              </Text>
              <Tooltip title="새 탭">
                <Button
                  type="link"
                  icon={
                    <DiffOutlined className="aboutme_textsize_content_icon" />
                  }
                  onClick={() => handleLinkIconOnClick("webSite")}
                />
              </Tooltip>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Button
                type="primary"
                shape="round"
                icon={<GithubOutlined className="aboutme_textsize" />}
                className="aboutme_btn"
              />
            </Col>
            <Col span={7}>
              <Text className="aboutme_textsize">GitHub</Text>
            </Col>
            <Col span={14}>
              <Text className="aboutme_textsize_content">
                github.com/yellyB
              </Text>
              <Tooltip title="새 탭">
                <Button
                  type="link"
                  icon={
                    <DiffOutlined className="aboutme_textsize_content_icon" />
                  }
                  onClick={() => handleLinkIconOnClick("gitHub")}
                />
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AboutMe;
