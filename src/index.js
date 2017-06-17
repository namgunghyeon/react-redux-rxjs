import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import App from './navigation/containers/App';
import UserSearch from './navigation/containers/UserSearch';
import ReposByUser from './navigation/containers/ReposByUser';
import Admin from './navigation/containers/Admin';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();
const history = syncHistoryWithStore(
  browserHistory,
  store
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={UserSearch} />
        <Route path='repos/:user' component={ReposByUser} />
        <Route path='admin' component={Admin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
