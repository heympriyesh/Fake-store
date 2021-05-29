import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import allReducers from './useReducer';
import { StepContext} from './changeContext/chagneContext';
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <StepContext>
      <App />
    </StepContext>
    
  </Provider>,
  document.getElementById('root')
);
