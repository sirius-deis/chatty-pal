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
  it("should render a profile picture", () => {
    render(<ChatInfo name="Sam" photoSrc="picture.png" />);
    const img = screen.getByAltText(/Sam profile photo/);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "picture.png");
  });
});
