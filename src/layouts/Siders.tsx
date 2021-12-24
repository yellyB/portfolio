import React, { useEffect } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Siders = (props: { key: string; setKey: Function }) => {
  const { key, setKey } = props;

  const handleClick = (e: any) => {
    setKey(e.key);
  };
  console.log(props);

  useEffect(() => {
    console.log(key);
  }, [key]);

  return (
    <Menu
      onClick={handleClick}
      style={{ width: "100%" }}
      mode="vertical"
      defaultSelectedKeys={[key]}
    >
      <Menu.Item key="HOME" icon={<MailOutlined />}>
        HOME
      </Menu.Item>
      <Menu.Item key="SKILS" icon={<MailOutlined />}>
        ABOUT ME
      </Menu.Item>
      <Menu.Item key="PROJECT" icon={<MailOutlined />}>
        PROJECT
      </Menu.Item>
      <Menu.Item key="CAREER" icon={<MailOutlined />}>
        CAREER
      </Menu.Item>
      <Menu.Item key="CONTACT" icon={<MailOutlined />}>
        CONTACT
      </Menu.Item>
    </Menu>
  );
};

export default Siders;
