import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Chat from './chat';
import ChatActionTypes from '../../store/chat/chat.types'

jest.mock('../messageGroup/messageGroup', () => () => <div data-testid="message-group" />);
jest.mock('../chatInput/chatInput', () => () => <div data-testid="chat-input" />);
jest.mock('../loader/loader', () => () => <div data-testid="loader" />);
jest.mock('../chatInfo/chatInfo', () => () => <div data-testid="chat-info" />);
jest.mock('../error/error', () => ({ children }) => <div data-testid="error">{children}</div>);

const mockStore = configureStore([thunk]);

describe('Chat Component', () => {
  let store;
  const initialState = {
    user: {
      user: { id: 'user1' }
    },
    chat: {
      chats: [
        {
          id: 'chat1',
          messages: [
            { id: 'msg1', senderId: 'user1', createdAt: '2023-06-01T12:00:00Z', content: 'Hello' },
            { id: 'msg2', senderId: 'user2', createdAt: '2023-06-01T12:01:00Z', content: 'Hi there' },
            { id: 'msg3', senderId: 'user1', createdAt: '2023-06-02T12:00:00Z', content: 'How are you?' },
          ]
        }
      ],
      isLoading: false,
      error: null
    }
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should render chat component with messages', () => {
    render(
      <Provider store={store}>
        <Chat chatId="chat1" />
      </Provider>
    );

    expect(screen.getAllByTestId('message-group')).toHaveLength(3);
    expect(screen.getByTestId('chat-input')).toBeInTheDocument();
    expect(screen.getByText('2023-06-01')).toBeInTheDocument();
    expect(screen.getByText('2023-06-02')).toBeInTheDocument();
  });

  it('should render loader when isLoading is true', () => {
    store = mockStore({
      ...initialState,
      chat: { ...initialState.chat, isLoading: true }
    });

    render(
      <Provider store={store}>
        <Chat chatId="chat1" />
      </Provider>
    );

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should render error message when there is an error', () => {
    store = mockStore({
      ...initialState,
      chat: { ...initialState.chat, error: 'An error occurred' }
    });

    render(
      <Provider store={store}>
        <Chat chatId="chat1" />
      </Provider>
    );

    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong. Please reload the page')).toBeInTheDocument();
  });

  it('should dispatch fetchSingleChat action when chat is not found', () => {
    render(
      <Provider store={store}>
        <Chat chatId="nonexistent-chat" />
      </Provider>
    );

    const actions = store.getActions();
    expect(actions).toContainEqual(expect.objectContaining({ 
      type: expect.stringContaining(ChatActionTypes.FETCH_SINGLE_CHAT_START)
    }));
  });

  it('should not dispatch fetchSingleChat action when chat is found', () => {
    render(
      <Provider store={store}>
        <Chat chatId="chat1" />
      </Provider>
    );

    const actions = store.getActions();
    expect(actions).not.toContainEqual(expect.objectContaining({ 
      type: expect.stringContaining('fetchSingleChat')
    }));
  });
});