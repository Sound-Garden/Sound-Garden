import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Balance from './components/Balance.jsx';
import Budget from './components/Budget.jsx';
import CCSelector from './components/CCSelector.jsx';
import Login from './components/Login.jsx';
import Portfolio from './components/Portfolio.jsx';
import EmailNotifications from './components/EmailNotifications.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './reducers/appReducer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  componentDidMount() {
  }

  render () {
    return (
      <Router>
        <div>
        <h1>Thesis</h1>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/Balance">Balance</Link></li>
          <li><Link to="/budget">Budget</Link></li>
          <li><Link to="/ccSelector">CC Selector</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/emailNotifications">Email Notifications</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Login}/>
        <Route path="/balance" component={Balance}/>
        <Route path="/budget" component={Budget}/>
        <Route path="/ccSelector" component={CCSelector}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/emailNotifications" component={EmailNotifications}/>

        </div>
      </Router>
    );
  }
}

let store = createStore(appReducer);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
 document.getElementById('app'));