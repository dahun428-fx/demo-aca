import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

function HeaderComponent(){

  
    const headerStyle = {
      padding: 0, height:'auto', backgroundColor:'white' 
    }
  
    return (
        <Header className="site-layout-background" style={headerStyle} >
          <a href="/">
            <img src="./img/logo/logo.jpg" alt="blueaca" style={{width:'150px'}} />
          </a>    
        </Header>
    );
}

export default HeaderComponent;