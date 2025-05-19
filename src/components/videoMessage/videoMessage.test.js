import { render, screen, fireEvent } from "@testing-library/react";
import VideoMessage from "./videoMessage";

const message = {
  src: "video.mp4",
  message: "Watch this video",
  createdAt: "2023-10-01T12:00:00Z",
  isRead: false
}

describe("VideoMessage component", () => {
  it("should match snapshot", () => {
    const {container} = render(<VideoMessage message={message} />)
    expect(container).toMatchSnapshot();
  })
  it("should render video message with corresponding src", () => {
    render(<VideoMessage message={message} />);
    const videoElement = screen.getByTestId("video")
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute("src", message.src)
  })
  it("should render videoMessage with corresponding text", () => {
    render(<VideoMessage message={message} />);
    const textElement = screen.getByText(message.message);
    expect(textElement).toBeInTheDocument()
  })
})
