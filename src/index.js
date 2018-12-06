import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configure_store'; 
import ReduxToastr from 'react-redux-toastr';
//import { destroySession } from './resources/resources'

/////////
import './index.css';
import './css/style';

import SigninRegister from './components/signin_register';
import UserProfile from './components/user_profile';
import AddAvatar from './components/add_avatar';

/////////
const middleware = routerMiddleware(browserHistory);
const store = configureStore(null, middleware);

const history = syncHistoryWithStore(browserHistory, store);
/////////

ReactDOM.render(
    <Provider store={store}>
    <div>
    <ReduxToastr
      timeOut={3000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick/>
      
        <Router history={history}>
          <Route path="/" component={SigninRegister} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/avatar" component={AddAvatar} />
         </Router>
      </div>
    </Provider>
  
, document.getElementById('root'));
