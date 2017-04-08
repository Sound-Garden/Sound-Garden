import { combineReducers } from 'redux';
import budget from './budget.js';
import CCcashback from './CCcashback.js'

//implement lines below when there are actually other reducers in folder
// import * as reducers from './reducers';
// const appReducer = combineReducers(reducers);

// temporary combineReducers
const appReducer = combineReducers({
  budget, CCcashback
});

export default appReducer;