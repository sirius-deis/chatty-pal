import { render, screen } from "@testing-library/react";
import Message from "./message";

describe("Message component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <Message>
        {{ message: "Test Message", createdAt: new Date().toISOString() }}
      </Message>
    );
    expect(container).toMatchSnapshot();
  });
  it("should contain provided text", () => {
    render(
      <Message>
        {{ message: "Test Message", createdAt: new Date().toISOString() }}
      </Message>
    );
    expect(screen.getByText(/Test Message/)).toBeInTheDocument();
  });
});
