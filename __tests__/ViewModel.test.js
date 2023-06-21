import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ViewModel from '../src/models/viewModel';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock('../src/redux/actions/itemAction', () => ({
    fetchAPI: jest.fn(),
    loadFromAsyncStorage: jest.fn(),
  }));

  const mockStore = configureStore([]);
const initialState = { api: { data: [], loading: false, error: null, isOnline: true } };
const store = mockStore(initialState);

describe('ViewModel', () => {
    it('renders correctly', () => {
        const { getByText } = render(
          <Provider store={store}>
            <ViewModel />
          </Provider>
        );
    
        
        expect(getByText('Loading...')).toBeTruthy();

      });
})