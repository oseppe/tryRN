import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const reducer = combineReducers({
  form: formReducer,
});

const store = createStore(reducer);

export default store;
