import { render, screen, fireEvent } from "@testing-library/react";
import Backdrop from "./backdrop";

describe("Backdrop component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Backdrop></Backdrop>);
    expect(container).toMatchSnapshot();
  });
  it("should have a dark background", () => {
    render(<Backdrop></Backdrop>);
    expect(screen.getByTestId("backdrop")).toHaveStyle({ backgroundColor: "var(--shadow-color)" });
  });
  it("should be clickable", () => {
    const handleClick = jest.fn();
    render(<Backdrop onClickHandler={handleClick}></Backdrop>);
    fireEvent.click(screen.getByTestId("backdrop"));
    expect(handleClick).toHaveBeenCalled();
  });
})