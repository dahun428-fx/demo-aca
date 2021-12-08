import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { useState } from 'react';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SiderComponent(){

    const [ Collapsed, setCollapsed ] = useState(false);
    
    const onCollapse = () => {
        setCollapsed(!Collapsed);
    }

    return (

        <Sider collapsible collapsed={Collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                Files
                </Menu.Item>
            </Menu>
        </Sider>
    );
}
export default SiderComponent;