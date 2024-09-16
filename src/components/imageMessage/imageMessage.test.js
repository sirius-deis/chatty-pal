import { render, screen } from "@testing-library/react";
import ImageMessage from "./imageMessage";

const message = {
  src: "image.jpg",
  message: "image message"
}

describe("ImageMessage component", () => {
  it("should match snapshot", () => {
    const { container } = render(<ImageMessage message={message} />);
    expect(container).toMatchSnapshot();
  });

  
})