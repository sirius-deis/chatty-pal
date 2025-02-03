import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./input";

describe("Input component", () => {
  const fn = jest.fn();

  beforeEach(() => {
    fn.mockClear();
  });
  
  it("should match snapshot", () => {
    const { container } = render(
      <Input type="text" placeholder="Enter text" />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render input with provided type and placeholder", () => {
    render(<Input type="text" placeholder="Enter text" />);
    expect(screen.getByPlaceholderText(/Enter text/)).toBeInTheDocument();
  });
  it("should change value", () => {
    render(<Input type="text" placeholder="Enter text" onChange={fn} />);
    fireEvent.change(screen.getByPlaceholderText(/Enter text/), {
      target: { value: "New value" },
    });
    expect(screen.getByPlaceholderText(/Enter text/)).toHaveValue("New value");
  });
  it("should call onChange function", () => {
    render(<Input type="text" placeholder="Enter text" onChange={fn} name="name" />);
    fireEvent.change(screen.getByPlaceholderText(/Enter text/), {
      target: { value: "New value" },
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith("New value", "name");
  });
});
