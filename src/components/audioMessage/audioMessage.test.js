import { render, screen } from "@testing-library/react";
import AudioMessage from "./audioMessage";

const message = {
  id: 1,
  createdAt: new Date("2024-07-17T21:08:30").toISOString(),
  type: "audio",
  src: "audio.mp3",
}

describe("AudioMessage component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <AudioMessage message={message}/>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders audio buttons", () => {
    render(
      <AudioMessage message={message}/>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});