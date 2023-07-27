import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  GlobalOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={handleToggleSidebar}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<GlobalOutlined />}>
          Region Selection
        </Menu.Item>
        <Menu.Item key="3" icon={<SearchOutlined />}>
          Load
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
