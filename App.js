import React from 'react';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import ViewModel from './src/models/viewModel';
import Nav from './src/components/Nav';

const App = () => {
 
  return (
        <Provider store={store}>
          <Nav/>
          <ViewModel />
        </Provider>
)};


export default App;