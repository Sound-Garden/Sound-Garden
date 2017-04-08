import React from 'react';
// import GoogleMap from './GoogleMap.jsx'
// import Map from 'google-maps-react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { incrementCCcashback, decrementCCcashback } from '../actions/CCcashback.js';

class CCCashback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  componentDidMount() {
  }

  render () {
    return (
      <div>
        <li>
          Shoes
          <button onClick={this.props.handleDecrement}>-</button>
          <button onClick={this.props.handleIncrement}>+</button>
          {this.props.CCcashback} %
        </li>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CCcashback: state.CCcashback
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => { dispatch(incrementCCcashback()) },
    handleDecrement: () => { dispatch(decrementCCcashback()) }
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (CCCashback);