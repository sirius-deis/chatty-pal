import { render, screen, fireEvent } from '@testing-library/react';
import LabelWithCheckbox from './checkbox';

describe('Checkbox component', () => {
  it('should match snapshot', () => {
    const { container } = render(<LabelWithCheckbox label='Click me' />);
    expect(container).toMatchSnapshot();
  });
  it('should contain provided text', () => {
    render(<LabelWithCheckbox label='Click me' />);
    expect(screen.getByText(/Click me/)).toBeInTheDocument();
  });
  it('should fire an event when clicking the component', () => {
    render(<LabelWithCheckbox label='Click me' />);
    expect(screen.queryByRole('checkbox').checked).toBeFalsy();
    fireEvent.click(screen.getByText(/Click me/));
    expect(screen.getByRole('checkbox').checked).toBeTruthy();
  });
});
