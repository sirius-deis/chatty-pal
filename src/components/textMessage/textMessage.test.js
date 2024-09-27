import { render, screen } from "@testing-library/react";
import TextMessage from "./textMessage";

describe("TextMessage component", () => {
  it("should match snapshot", () => {
    const { container } = render(<TextMessage>Hello World!</TextMessage>);
    expect(container).toMatchSnapshot();
  });

  it("renders the text", () => {
    render(<TextMessage>Hello World!</TextMessage>);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });
})