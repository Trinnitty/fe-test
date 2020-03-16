import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import User from '../src/components/user/user';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './components/theme';

ReactDOM.render( 
    <BrowserRouter>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/:number' component={User}/>
            </Switch>
        </MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  ,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
