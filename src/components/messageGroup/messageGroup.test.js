import { render, screen } from "@testing-library/react";
import MessageGroup from "./messageGroup";

const messages = [
  {
    id: 1,
    senderId: "1",
    message: "Message 1",
    createdAt: new Date("2024-07-17T21:08:30").toISOString(),
  },
  {
    id: 2,
    senderId: "1",
    message: "Message 2",
    createdAt: new Date("2024-07-17T21:09:50").toISOString(),
  },
];

describe("MessageGroup component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <MessageGroup messages={messages} userId={1} />
    );
    expect(container).toMatchSnapshot();
  });
  it("should render messages", () => {
    render(<MessageGroup messages={messages} />);
    messages.forEach(({ message }) =>
      expect(screen.getByText(message)).toBeInTheDocument()
    );
  });
});
