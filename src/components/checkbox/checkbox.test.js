import { render, screen, fireEvent } from '@testing-library/react';
import LabelWithCheckbox from './checkbox';
import React from 'react';

const ParentComponent = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <LabelWithCheckbox
      label="Click me"
      isChecked={isChecked}
      onChangeHandler={handleCheckboxChange}
    />
  );
};

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
    render(<ParentComponent />);
    expect(screen.queryByTestId('checkbox').checked).toBeFalsy();
    fireEvent.click(screen.getByText(/Click me/));
    expect(screen.queryByTestId('checkbox').checked).toBeTruthy();
  });
});
