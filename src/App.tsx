import React, { useState, useEffect } from "react";
import "./App.less";
import "./style.css";
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Siders } from "./layouts";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [siderKey, setSiderKey] = useState<string>("HOME");

  useEffect(() => {}, []);

  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>content</Content>
        <Sider>
          <Siders siderKey={siderKey} setKey={setSiderKey} />
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
