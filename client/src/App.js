import { Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';

function App() {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/login"></Route>
      <Route exact path="/logout"></Route>
    </Switch>
  );
}

export default App;
