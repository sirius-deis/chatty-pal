import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button component', () => {
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <Button onClick={fn} kind='rounded' styles={{ fontSize: '2rem' }}>
        Click me
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render children with plain text', () => {
    render(<Button kind='rounded'>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  it('should render children with html element', () => {
    render(
      <Button kind='rounded'>
        <h2>Click me</h2>
      </Button>,
    );
    expect(screen.getByRole('button')).toContainHTML('<h2>Click me</h2>');
  });
  it('should fire an event', () => {
    const fn = jest.fn();
    render(
      <Button onClick={fn} kind='rounded'>
        Click me
      </Button>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
