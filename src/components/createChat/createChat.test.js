import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateChat from './createChat';

// Mock the fetchData function
jest.mock('../../utils/fetchData.js', () => ({
  fetchData: jest.fn(() => Promise.resolve()),
}));

describe('CreateChat Component', () => {
  const mockClickHandler = jest.fn();
  const defaultProps = {
    title: 'New Chat',
    clickHandler: mockClickHandler,
  };

  const wrapperId = 'modal';
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);

  it('should render correctly with default props', () => {
    render(<CreateChat {...defaultProps} />);
    expect(screen.getByText('Create a New Chat')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter a chat name')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument();
  });

  it('should allow entering a chat title', () => {
    render(<CreateChat {...defaultProps} />);
    const input = screen.getByPlaceholderText('Enter a chat name');
    fireEvent.change(input, { target: { value: 'My New Chat' } });
    expect(input.value).toBe('My New Chat');
  });

  it('calls clickHandler when cancel button is clicked', () => {
    render(<CreateChat {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(mockClickHandler).toHaveBeenCalled();
  });
});