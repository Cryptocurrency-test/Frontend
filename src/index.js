import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GenericReport from './Reports/WhitePaper';
import App from './App';
import './index.css';

function Root1() {
  return (
    <div>
      <Router>
        <Switch>
          <Route render={() => <GenericReport />} path="/whitepaper" />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </div>
  )
}
ReactDOM.render(<Root1 />, document.getElementById('root'));

serviceWorker.unregister();
