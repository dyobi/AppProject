import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RootReducer from './sources/reducers';
import App from './sources/screens/app';

const store = createStore(RootReducer);

const Container = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Container;