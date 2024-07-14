import { render, screen } from "@testing-library/react";
import Message from "./message";

const time = new Date("2024-07-17T21:08:30").toISOString();

const message = {
  message: "Test Message",
  createdAt: time,
};

describe("Message component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Message>{message}</Message>);
    expect(container).toMatchSnapshot();
  });
  it("should contain provided text", () => {
    render(<Message>{message}</Message>);
    expect(screen.getByText(/Test Message/)).toBeInTheDocument();
  });
  it("should have a timestamp", () => {
    render(<Message>{message}</Message>);
    expect(screen.getByText(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)).toBeInTheDocument();
  });
});
