import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UcmApp from './ucma';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={UcmApp} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));