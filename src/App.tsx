import React, { useState, useEffect } from "react";
import "./App.less";
import "./style.css";
import { Layout, Anchor, Button, Affix, Row, Col } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Project, Siders } from "./components";
import {
  HomeOutlined,
  IdcardOutlined,
  DesktopOutlined,
  ReconciliationOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const { Link } = Anchor;

const { Header, Content, Footer } = Layout;

const App = () => {
  const [siderKey, setSiderKey] = useState<string>("HOME");
  const keyList = [
    { title: "HOME", icon: <HomeOutlined /> },
    { title: "ABOUT ME", icon: <IdcardOutlined /> },
    { title: "PROJECT", icon: <DesktopOutlined /> },
    { title: "CAREER", icon: <ReconciliationOutlined /> },
    { title: "CONTACT", icon: <WhatsAppOutlined /> },
  ];

  const handleSideKey = (key: string) => {
    setSiderKey(key);
    window.location.href = "#" + key;
  };

  useEffect(() => {}, []);

  return (
    <Layout style={{ fontFamily: "nexonGothic" }}>
      {/* <Header>Header</Header> */}
      <Layout>
        {/* <Sider> */}
        {/* <Affix offsetTop={10}>
            <Siders siderKey={siderKey} setKey={handleSideKey} />
          </Affix> */}
        {/* <Anchor>
          {keyList.map((item: string) => (
            <Link href={"#" + item} title={item} />
          ))}
        </Anchor> */}
        {/* </Sider> */}
        <Content>
          <Row>
            <Col span={3}>
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
            <Col span={21}>
              <Row id="HOME" style={{ height: 500, border: "1px solid red" }}>
                HOME
              </Row>
              <Row
                id="ABOUT ME"
                style={{ height: 500, border: "1px solid red" }}
              >
                ABOUT ME
              </Row>
              <Row
                id="PROJECT"
                style={{ height: 500, border: "1px solid red" }}
              >
                <Project />
              </Row>
              <Row id="CAREER" style={{ height: 500, border: "1px solid red" }}>
                CAREER
              </Row>
              <Row
                id="CONTACT"
                style={{ height: 500, border: "1px solid red" }}
              >
                CONTACT
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
