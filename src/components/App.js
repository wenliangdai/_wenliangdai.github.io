import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import BaseLayer from './BaseLayer';
import MyInfoLayer from './MyInfoLayer';

import resetCss from '../styles/reset.scss';
import iconfont from '../styles/IconFont.scss';

const App = () => (
  <div>
    <BaseLayer />
    <Router history={browserHistory}>
      <Route path='/' component={MyInfoLayer}>

      </Route>
    </Router>

  </div>


);

export default App
