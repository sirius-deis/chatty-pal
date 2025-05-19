import { render, screen } from "@testing-library/react";
import MessageInfo from "./messageInfo";

const timestamp = "2024-09-13T12:04:25"

describe("MessageInfo component", () => {
  it("should match snapshot", () => {
    const { container } = render(<MessageInfo createdAt={timestamp} isOwn isRead={false}/>);
    expect(container).toMatchSnapshot();
  });
})