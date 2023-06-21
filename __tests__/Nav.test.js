import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Nav from '../src/components/Nav';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock('../redux/actions/itemAction', () => ({
    updateOnlineStatus: jest.fn(),
  }));
  
  const mockStore = configureStore([]);
  const initialState = { isOnline: true };
  const store = mockStore(initialState);

describe('Nav', () => {
    const { getByText } = render(
        <Provider store={store}>
          <Nav />
        </Provider>
      );
  
   
      expect(getByText('You are online')).toBeTruthy();

      it('dispatch when toggled', () => {
        const { getByTestId } = render(
          <Provider store={store}>
            <Nav />
          </Provider>
        );
    
      
        const switchElement = getByTestId('nav-switch');
        fireEvent.press(switchElement);
    
       
        expect(updateOnlineStatus).toHaveBeenCalledWith(false);
       
      });
})