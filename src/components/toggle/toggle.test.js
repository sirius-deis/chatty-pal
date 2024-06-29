import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./toggle";

describe("Toggle component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Toggle />);
    expect(container).toMatchSnapshot();
  });
  it("should render toggle with the right checked true value", () => {
    render(<Toggle checked />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
  it("should render toggle with the right checked false value", () => {
    render(<Toggle checked={false} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
  it("should fire event", () => {
    const fn = jest.fn();
    render(<Toggle checked onChange={fn} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(fn).toHaveBeenCalled();
  });
});
