import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

import store from '../src/redux/store';
import { Provider } from 'react-redux';
describe('App', () => {
    it('renders correctly', () => {
        const { getByText } = render(
          <Provider store={store}>
            <App />
          </Provider>
        );
    
        
        expect(getByText('Nav')).toBeTruthy();
        expect(getByText('ViewModel')).toBeTruthy();
      
      });
})