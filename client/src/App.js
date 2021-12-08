import { Route, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import SiderComponent from './Components/Layout/SiderComponent';
import HeaderComponent from './Components/Layout/HeaderComponent';
import ContentComponent from './Components/Layout/ContentComponet';
import FooterComponent from './Components/Layout/FooterComponent';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function App() {

  const [ Collapsed, setCollapsed ] = useState(false);

  useEffect(()=>{},[

  ]);
  const onCollapse = () => {
      setCollapsed(!Collapsed);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderComponent />
    <Layout className="site-layout">
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </Layout>
  </Layout>
  );
}

export default App;
