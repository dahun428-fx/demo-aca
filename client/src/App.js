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
import SiderComponent from './views/Components/Layout/SiderComponent';
import HeaderComponent from './views/Components/Layout/HeaderComponent';
import ContentComponent from './views/Components/Layout/ContentComponet';
import FooterComponent from './views/Components/Layout/FooterComponent';
import MainPage from './views/Components/LandingPage/MainPage';

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
      <HeaderComponent />
    <Layout className="site-layout">
      <SiderComponent />
      <Layout>
        <ContentComponent />
        <FooterComponent />
      </Layout>
    </Layout>
  </Layout>
  );
}

export default App;
