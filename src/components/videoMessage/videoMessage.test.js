import { render, screen } from "@testing-library/react";
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
})
