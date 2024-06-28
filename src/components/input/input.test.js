import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./input";

describe("Input component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Input type="text" placeholder="Enter text" />
    );
    expect(container).toMatchSnapshot();
  });
  it("should contain provided text", () => {
    render(<Input type="text" placeholder="Enter text" />);
    expect(screen.getByPlaceholderText(/Enter text/)).toBeInTheDocument();
  });
  it("should change value", () => {
    render(<Input type="text" placeholder="Enter text" />);
    fireEvent.change(screen.getByPlaceholderText(/Enter text/), {
      target: { value: "New value" },
    });
    expect(screen.getByPlaceholderText(/Enter text/)).toHaveValue("New value");
  });
  it("should call onChange function", () => {
    const fn = jest.fn();
    render(<Input type="text" placeholder="Enter text" onChange={fn} />);
    fireEvent.change(screen.getByPlaceholderText(/Enter text/), {
      target: { value: "New value" },
    });
    expect(fn).toHaveBeenCalled();
  });
});
