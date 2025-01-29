import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Contacts from './contacts';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

const mockStore = configureStore([thunk]);

describe('Contacts Component', () => {
  let store;
  const mockClickHandler = jest.fn();

  beforeEach(() => {
    store = mockStore({
      contacts: {
        contacts: [
          { _id: '1', name: 'John Doe', photo: 'john.jpg' },
          { _id: '2', name: 'Jane Smith', photo: 'jane.jpg' },
        ],
      },
    });
    mockClickHandler.mockClear();
    mockNavigate.mockClear();
  });

  const wrapperId = 'modal';
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);

  it('should render contacts', () => {
    render(
      <Provider store={store}>
        <Router>
          <Contacts clickHandler={mockClickHandler} />
        </Router>
      </Provider>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('should navigate to chat on button click', () => {
    render(
      <Provider store={store}>
        <Router>
          <Contacts clickHandler={mockClickHandler} />
        </Router>
      </Provider>
    );

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    
    expect(mockNavigate).toHaveBeenCalledWith('/chat/1');
  });
});