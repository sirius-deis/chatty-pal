import { render, screen } from "@testing-library/react";
import MessageInfo from "./messageInfo";

const timestamp = "2024-09-13T12:04:25"

describe("MessageInfo component", () => {
  it("should match snapshot", () => {
    const { container } = render(<MessageInfo createdAt={timestamp} isOwn isRead={false}/>);
    expect(container).toMatchSnapshot();
  });

  it("should contain provided timestamp", () => {
    render(<MessageInfo createdAt={timestamp} isOwn />);
    expect(screen.getByText(/12:04:25/)).toBeInTheDocument();
  })
  it("should have unchecked mark if the message is not read", () => {
    render(<MessageInfo createdAt={timestamp} isOwn isRead={false}/>);
    expect(screen.getByTestId("notChecked")).toBeInTheDocument();
    expect(screen.queryByTestId("checked")).not.toBeInTheDocument();
  })
  it("should have checked mark if the message is read", () => {
    render(<MessageInfo createdAt={timestamp} isOwn isRead />);
    expect(screen.getByTestId("checked")).toBeInTheDocument()
    expect(screen.queryByTestId("notChecked")).not.toBeInTheDocument();
  })
})