import React, { useState } from "react";
import "./App.less";
import "./style.css";
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import { Siders } from "./layouts";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [siderKey, setSiderKey] = useState<string>("HOME");

  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>
          <Siders key={siderKey} setKey={setSiderKey} />
        </Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
