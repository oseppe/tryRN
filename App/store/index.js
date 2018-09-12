import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
