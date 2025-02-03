import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ThemeContext } from '../../store/themeContext';
import Menu from './menu';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('../../store/user/user.actions.js', () => ({
  signOut: jest.fn(),
}));

const mockStore = configureStore([]);

describe('Menu Component', () => {
  let store;
  const mockChangeTheme = jest.fn();

  beforeEach(() => {
    store = mockStore({
      user: {
        user: {
          id: '123',
          userName: 'TestUser',
          bio: 'Test Bio',
          photos: [],
        },
        token: 'testToken',
      },
    });

    render(
      <Provider store={store}>
        <ThemeContext.Provider value={{ theme: 'light', changeTheme: mockChangeTheme }}>
          <BrowserRouter>
            <Menu />
          </BrowserRouter>
        </ThemeContext.Provider>
      </Provider>
    );
  });

  it('should render user information', () => {
    expect(screen.getByText('TestUser')).toBeInTheDocument();
    expect(screen.getByText('Test Bio')).toBeInTheDocument();
  });

  it('should render all menu items', () => {
    expect(screen.getByText('New Group')).toBeInTheDocument();
    expect(screen.getByText('New Channel')).toBeInTheDocument();
    expect(screen.getByText('Contacts')).toBeInTheDocument();
    expect(screen.getByText('Calls')).toBeInTheDocument();
    expect(screen.getByText('Saved Messages')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Night Mode')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('should toggle theme when Night Mode is clicked', () => {
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    expect(mockChangeTheme).toHaveBeenCalledWith('dark');
  });

  it('should navigate to saved messages when clicked', () => {
    const savedMessagesButton = screen.getByText('Saved Messages');
    fireEvent.click(savedMessagesButton);
    expect(window.location.pathname).toBe('/chat/123');
  });

});