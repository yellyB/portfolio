import React, { useState, useEffect } from "react";
import "./App.less";
import "./style.css";
import { Layout, Anchor, Image, Row, Col, PageHeader, Typography } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Skills, Project, Career, AboutMe, Contact, Home } from "./components";
import {
  HomeOutlined,
  IdcardOutlined,
  ToolOutlined,
  DesktopOutlined,
  ReconciliationOutlined,
  WhatsAppOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const { Link } = Anchor;

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const linkIconStyle = {
  fontSize: "18pt",
};

const App = () => {
  const [sideKey, setSideKey] = useState<string>("HOME");
  const keyList = [
    { title: "HOME", icon: <HomeOutlined /> },
    { title: "SKILLS_ani", icon: <ToolOutlined /> },
    { title: "SKILLS", icon: <ToolOutlined /> },
    { title: "PROJECT_ani", icon: <DesktopOutlined /> },
    { title: "PROJECT", icon: <DesktopOutlined /> },
    { title: "CAREER_ani", icon: <ReconciliationOutlined /> },
    { title: "CAREER", icon: <ReconciliationOutlined /> },
    { title: "ABOUT ME_ani", icon: <IdcardOutlined /> },
    { title: "ABOUT ME", icon: <IdcardOutlined /> },
    { title: "CONTACT", icon: <WhatsAppOutlined /> },
  ];

  const handleSideKey = (key: string) => {
    setSideKey(key);
    // window.location.href = "#" + key;
  };

  useEffect(() => {}, []);

  return (
    <Layout className="app_layout_wrapper">
      <Layout>
        <Content>
          <Row>
            <Col span={20} className="app_content_main_wrapper">
              <Row id="HOME" style={{ height: 600 }}>
                <Home sideKey={sideKey} />
                <div
                  id="SKILLS_ani"
                  style={{
                    border: " 1px solid green",
                    width: "100%",
                    marginTop: "-10%",
                  }}
                />
              </Row>
              <Row id="SKILLS">
                <PageHeader
                  onBack={() => (window.location.href = "SKILLS")}
                  title="SKILLS"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <Skills sideKey={sideKey} />{" "}
                <div
                  id="PROJECT_ani"
                  style={{
                    border: " 1px solid green",
                    width: "100%",
                    marginTop: "-40%",
                    height: 0,
                  }}
                />
              </Row>
              <Row id="PROJECT">
                <PageHeader
                  onBack={() => (window.location.href = "PROJECT")}
                  title="PROJECT"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <Project sideKey={sideKey} />
                <div
                  id="CAREER_ani"
                  style={{
                    border: " 1px solid green",
                    width: "100%",
                    marginTop: "-40%",
                    height: 0,
                  }}
                />
              </Row>
              <Row id="CAREER">
                <PageHeader
                  onBack={() => (window.location.href = "CAREER")}
                  title="CAREER"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <Career sideKey={sideKey} />
                <div
                  id="ABOUT ME_ani"
                  style={{
                    border: " 1px solid green",
                    width: "100%",
                    marginTop: "-10%",
                    height: 0,
                  }}
                />
              </Row>
              <Row id="ABOUT ME" style={{ height: 500 }}>
                <PageHeader
                  onBack={() => (window.location.href = "ABOUT ME")}
                  title="ABOUT ME"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <AboutMe />
              </Row>
              <Row id="CONTACT" style={{ height: 500 }}>
                <PageHeader
                  onBack={() => (window.location.href = "CONTACT")}
                  title="CONTACT"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <Contact />
              </Row>
            </Col>
            <Col span={4} className="app_content_side_wrapper">
              <Anchor
                className="app_content_side_anchor"
                onChange={handleSideKey}
              >
                {keyList.map((item: any) => (
                  <Link
                    href={"#" + item.title}
                    title={
                      <div className="app_content_side_anchor_link">
                        {item.icon} {item.title}
                      </div>
                    }
                  />
                ))}
              </Anchor>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
