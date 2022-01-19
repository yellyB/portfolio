import React, { useState, useEffect } from "react";
import "./App.less";
import "./style.css";
import {
  Layout,
  Anchor,
  Image,
  Row,
  Col,
  PageHeader,
  Typography,
  Affix,
  Button,
} from "antd";
import Sider from "antd/lib/layout/Sider";
import {
  Skills,
  Project,
  Career,
  AboutMe,
  Contact,
  Home,
  MyFooter,
} from "./components";
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
    { title: "SKILLS", icon: <ToolOutlined /> },
    { title: "PROJECT", icon: <DesktopOutlined /> },
    { title: "CAREER", icon: <ReconciliationOutlined /> },
    { title: "ABOUT ME", icon: <IdcardOutlined /> },
    // { title: "CONTACT", icon: <WhatsAppOutlined /> },
  ];

  const handleSideKeyOnChange = (key: string) => {
    setSideKey(key);
  };

  useEffect(() => {}, []);

  return (
    <Layout className="app_layout_wrapper">
      <Layout>
        <Content>
          <Row id="HOME">
            <Home sideKey={sideKey} />
            <div
              id="SKILLS"
              style={{
                border: " 0px solid green",
                width: "100%",
                marginTop: "-35%",
              }}
            />
          </Row>
          <Row>
            <Col span={20} className="app_content_main_wrapper">
              <Row justify="center" className="app_content_odd">
                <Col span={16}>
                  <PageHeader
                    className="app_pageheader"
                    onBack={() => (window.location.href = "#SKILLS")}
                    title="SKILLS"
                    backIcon={<LinkOutlined style={linkIconStyle} />}
                  />
                  <Skills sideKey={sideKey} />
                </Col>
                <div
                  id="PROJECT"
                  style={{
                    border: " 0px solid green",
                    width: "100%",
                    marginTop: "-10%",
                    height: 0,
                  }}
                />
              </Row>
              <Row justify="center" className="app_content_even">
                <Col span={16}>
                  <PageHeader
                    className="app_pageheader"
                    onBack={() => (window.location.href = "#PROJECT")}
                    title="PROJECT"
                    backIcon={<LinkOutlined style={linkIconStyle} />}
                  />
                  <Project sideKey={sideKey} />
                </Col>
                <div
                  id="CAREER"
                  style={{
                    border: " 0px solid green",
                    width: "100%",
                    marginTop: "-40%",
                    height: 0,
                  }}
                />
              </Row>
              <Row justify="center" className="app_content_odd">
                <Col span={16}>
                  <PageHeader
                    className="app_pageheader"
                    onBack={() => (window.location.href = "#CAREER")}
                    title="CAREER"
                    backIcon={<LinkOutlined style={linkIconStyle} />}
                  />
                  <Career sideKey={sideKey} />
                </Col>
                <div
                  id="ABOUT ME"
                  style={{
                    border: " 0px solid green",
                    width: "100%",
                    marginTop: "-10%",
                    height: 0,
                  }}
                />
              </Row>
              <Row justify="center" className="app_content_even">
                <Col span={16}>
                  <PageHeader
                    className="app_pageheader"
                    onBack={() => (window.location.href = "#ABOUT ME")}
                    title="ABOUT ME"
                    backIcon={<LinkOutlined style={linkIconStyle} />}
                  />
                  <AboutMe />
                </Col>
              </Row>
              {/* <Row id="CONTACT" style={{ height: 500 }}>
                <PageHeader
                  onBack={() => (window.location.href = "#CONTACT")}
                  title="CONTACT"
                  backIcon={<LinkOutlined style={linkIconStyle} />}
                />
                <Contact />
              </Row> */}
            </Col>
            <Col span={4} className="app_content_side_wrapper">
              <Anchor
                className="app_content_side_anchor"
                onChange={handleSideKeyOnChange}
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
      <Footer>
        <MyFooter />
      </Footer>
    </Layout>
  );
};

export default App;
