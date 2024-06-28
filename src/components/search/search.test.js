import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./search";

describe("Search component", () => {
  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<Search onChange={fn}></Search>);
    expect(container).toMatchSnapshot();
  });
  it("should should fire a change event", () => {
    const fn = jest.fn();
    render(<Search onChange={fn}></Search>);
    fireEvent.change(screen.getByPlaceholderText(/Search.../), {
      target: { value: "test" },
    });
    expect(fn).toHaveBeenCalledWith("test");
  });
  it("should clear search input", async () => {
    const fn = jest.fn();
    render(<Search onChange={fn} value="not empty"></Search>);
    fireEvent.click(screen.getByTestId("clear"));
    expect(fn).toHaveBeenCalled();
  });
});
