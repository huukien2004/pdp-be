import {
  LogoutOutlined,
  ScheduleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { PATH } from "../../constant";

function getItem(
  label: React.ReactNode,
  key: string,
  path: string,
  icon: React.ReactNode
) {
  return {
    key,
    icon,
    label,
    path,
  };
}

const items = [
  getItem("Profile", "1", PATH.home, <UserOutlined />),
  getItem("schedule", "2", PATH.schedule, <ScheduleOutlined />),
  getItem("Log out", "3", PATH.logout, <LogoutOutlined />),
];

const CustomLayout = ({
  openKey,
  children,
}: {
  openKey: string;
  children: any;
}) => {
  const cookies = new Cookies();
  const isAuthentication = cookies.get("isAuthentication");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthentication) {
      navigate(PATH.login);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthentication]);
  const handleOnChange = (key: any) => {
    const path = items.find((item) => item?.key === key.key)?.path;
    if (path) {
      navigate(path);
    }
  };
  return (
    <Layout>
      <Menu
        mode="inline"
        defaultSelectedKeys={[openKey]}
        onClick={handleOnChange}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: 200,
        }}
        items={items}
      />
      <Content style={{ overflow: "initial", marginLeft: 200 }}>
        {children}
      </Content>
    </Layout>
  );
};

export default CustomLayout;
