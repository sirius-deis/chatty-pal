import { render, screen, fireEvent } from '@testing-library/react';
import Burger from './burger';

describe('Burger component', () => {
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Burger onClick={fn}></Burger>);
    expect(container).toMatchSnapshot();
  });
  it('should should fire a click event', () => {
    const fn = jest.fn();
    render(<Burger onClick={fn}></Burger>);
    fireEvent.click(screen.getByRole('button'));
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
