import { render, screen } from "@testing-library/react";
import Heading from "./heading";

describe("Heading component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Heading>Heading</Heading>);
    expect(container).toMatchSnapshot();
  });
  it("should contain provided text", () => {
    render(<Heading>Heading</Heading>);
    expect(screen.getByText(/Heading/)).toBeInTheDocument();
  });
});
