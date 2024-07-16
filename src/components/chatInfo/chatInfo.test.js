import { render, screen } from "@testing-library/react";
import ChatInfo from "./chatInfo";

describe("ChatInfo component", () => {
  it("should match snapshot", () => {
    const { container } = render(<ChatInfo name="some name" />);
    expect(container).toMatchSnapshot();
  });

  it("should render a name", () => {
    render(<ChatInfo name="some name" />);
    expect(screen.getByText(/some name/)).toBeInTheDocument();
  });
});
