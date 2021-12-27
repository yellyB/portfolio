import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  IdcardOutlined,
  DesktopOutlined,
  ReconciliationOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const Siders = (props: { siderKey: string; setKey: Function }) => {
  const { siderKey, setKey } = props;

  return (
    <Menu
      onClick={(e: any) => {
        setKey(e.key);
      }}
      style={{ width: "100%" }}
      mode="vertical"
      selectedKeys={[siderKey]}
    >
      <Menu.Item key="HOME" icon={<HomeOutlined />}>
        HOME
      </Menu.Item>
      <Menu.Item key="ABOUT ME" icon={<IdcardOutlined />}>
        ABOUT ME
      </Menu.Item>
      <Menu.Item key="PROJECT" icon={<DesktopOutlined />}>
        PROJECT
      </Menu.Item>
      <Menu.Item key="CAREER" icon={<ReconciliationOutlined />}>
        CAREER
      </Menu.Item>
      <Menu.Item key="CONTACT" icon={<WhatsAppOutlined />}>
        CONTACT
      </Menu.Item>
    </Menu>
  );
};

export default Siders;
