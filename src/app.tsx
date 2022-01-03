import React from 'react';
import {Provider} from 'react-redux';
import store from './store/index';
import ListUser from './screens/ListUser/ListUser.screen';

const App = () => {
  return (
    <Provider store={store}>
      <ListUser />
    </Provider>
  );
};

export default App;
