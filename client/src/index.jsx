import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import 'react-dates/lib/css/_datepicker.css';
import { Provider } from 'react-redux';

import store from './store.js';
import Balance from './components/Balance/Balance.jsx';
import Transactions from './components/Transactions/Transactions.jsx';
import Budget from './components/Budget/Budget.jsx';
import CCCashback from './components/CreditCard/CCCashback.jsx';
import Navbar from './components/Navigation/Navbar.jsx';
import Landing from './components/Navigation/Landing.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Dialog from 'material-ui/Dialog';
import { green800, teal800, teal300 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green800,
    primary2Color: teal800,
    primary3Color: teal300,
    textColor: green800,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Router>
            <div>
              <Navbar />
              <div className="app-body">
                <Route exact path="/" component={Landing}/>
                <Route path="/balance" component={Balance}/>
                <Route path="/budget" component={Budget}/>
                <Route path="/ccCashback" component={CCCashback}/>
                <Route path="/transactions" component={Transactions}/>
              </div>
              <footer>
                <br />
                <small>&copy; <a href="https://github.com/Sound-Garden/Sound-Garden">Advisorly</a></small>
              </footer>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
