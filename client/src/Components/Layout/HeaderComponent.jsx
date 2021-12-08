import React from 'react';
import { Layout,Image } from 'antd';

const { Header } = Layout;

function HeaderComponent(){

    return (
      <Header className="site-layout-background" style={{ padding: 0 }} >
          <img src="./img/공식.jpg"></img>
      </Header>
    );
}

export default HeaderComponent;