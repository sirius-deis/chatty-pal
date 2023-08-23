import { render, screen, fireEvent } from '@testing-library/react';
import ChatInput from './chatInput';

describe('ChatInput component', () => {
  it('should match snapshot', () => {
    const { container } = render(<ChatInput chatId={1} />);
    expect(container).toMatchSnapshot();
  });
  it('should fire an event', () => {
    render(<ChatInput chatId={1} />);
    fireEvent.change(screen.getByPlaceholderText('Write a message'), {
      target: { value: 'Some message' },
    });
  });
});
