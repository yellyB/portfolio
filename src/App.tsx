import React, { useState, useEffect } from "react";
import "./App.less";
import "./style.css";
import { Layout, Anchor, Button, Affix, Row, Col, PageHeader } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Skills, Project, Career, AboutMe, Contact } from "./components";
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

const linkIconStyle = {
  fontSize: "18pt",
};

const App = () => {
  const [siderKey, setSiderKey] = useState<string>("HOME");
  const keyList = [
    { title: "HOME", icon: <HomeOutlined /> },
    { title: "SKILLS", icon: <ToolOutlined /> },
    { title: "PROJECT", icon: <DesktopOutlined /> },
    { title: "CAREER", icon: <ReconciliationOutlined /> },
    { title: "ABOUT ME", icon: <IdcardOutlined /> },
    { title: "CONTACT", icon: <WhatsAppOutlined /> },
  ];

  const handleSideKey = (key: string) => {
    setSiderKey(key);
    window.location.href = "#" + key;
  };

  useEffect(() => {}, []);

  return (
    <Layout style={{ fontFamily: "nexonGothic" }}>
      <Layout>
        <Content>
          <Row>
            <Col span={4} className="app_content_side">
              <Anchor>
                {keyList.map((item: any) => (
                  <Link
                    href={"#" + item.title}
                    title={
                      <div style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.icon} {item.title}
                      </div>
                    }
                  />
                ))}
              </Anchor>
            </Col>
            <Col span={20} className="app_content_main">
              <Row id="HOME" style={{ height: 500, border: "1px solid red" }}>
                HOME
              </Row>
              <Row id="SKILLS" style={{ border: "1px solid green" }}>
                <PageHeader
                  onBack={() => (window.location.href = "#SKILLS")}
                  title="SKILLS"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <Skills />
              </Row>
              <Row id="PROJECT" style={{ border: "1px solid green" }}>
                <PageHeader
                  onBack={() => (window.location.href = "#PROJECT")}
                  title="PROJECT"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <Project />
              </Row>
              <Row id="CAREER" style={{ border: "1px solid red" }}>
                <PageHeader
                  onBack={() => (window.location.href = "#CAREER")}
                  title="CAREER"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <Career />
              </Row>
              <Row
                id="ABOUT ME"
                style={{ height: 500, border: "1px solid red" }}
              >
                <PageHeader
                  onBack={() => (window.location.href = "#ABOUT ME")}
                  title="ABOUT ME"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <AboutMe />
              </Row>
              <Row
                id="CONTACT"
                style={{ height: 500, border: "1px solid red" }}
              >
                <PageHeader
                  onBack={() => (window.location.href = "#CONTACT")}
                  title="CONTACT"
                  subTitle="This is a subtitle"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <Contact />
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
