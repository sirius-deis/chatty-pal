import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import ResetPassword from './resetPassword';
import { resetPassword } from '../../store/user/user.actions';

jest.mock('../../store/user/user.actions', () => ({
  resetPassword: jest.fn(),
}));

const mockStore = configureStore([]);

describe('ResetPassword Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      user: {
        isLoading: false,
        error: null,
      },
    });
  });

  it('should render ResetPassword component', () => {
    render(
      <Provider store={store}>
        <Router>
          <ResetPassword />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Reset password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email \*/i)).toBeInTheDocument();
  });

  
});