import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import MainPage from '../LandingPage/MainPage';

const { Content } = Layout;
function ContentComponent(){

    return (
      <Content>
         <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login">
            <div>login</div>
          </Route>
        </Switch>
      </Content>
    );
}
export default ContentComponent;