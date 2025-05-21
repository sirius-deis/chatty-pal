import { render, screen, fireEvent } from "@testing-library/react";
import Message from "./message";

const message = {
  id: 1,
  message: "Test Message",
  createdAt: "2023-10-01T12:00:00Z",
};

jest.mock("../textMessage/textMessage", () => {
  return function MockedTextMessage({children}) {
    return <div>{children}</div>
  }
})

jest.mock("../audioMessage/audioMessage", () => {
  return function MockedAudioMessage() {
    return <div>Audio message</div>
  }
})

jest.mock("../videoMessage/videoMessage", () => {
  return function MockedVideoMessage() {
    return <div>Video message</div>
  }
})

jest.mock("../imageMessage/imageMessage", () => {
  return function MockedImageMessage() {
    return <div>Image message</div>
  }
})

describe("Message component", () => {
  it("should match snapshot", () => {
    const { container } = render(<Message message={message}/>);
    expect(container).toMatchSnapshot();
  });
  it("should contain provided text", () => {
    render(<Message message={message}/>);
    expect(screen.getByText(/Test Message/)).toBeInTheDocument();
  });
  it("should have a timestamp", () => {
    render(<Message message={message}/>);
    expect(screen.getByText(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)).toBeInTheDocument();
  });
  it("should fire a click event", () => {
    const fn = jest.fn();
    render(<Message message={message} clickHandler={fn}/>);
    fireEvent.doubleClick(screen.getByText(/Test Message/));
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(1);
  });
  it("should render audio message", () => {
    const audioMessage = {...message, type: "audio"};
    render(<Message message={audioMessage}/>);
    expect(screen.getByText(/Audio message/)).toBeInTheDocument()
  })
  it("should render video message with text message", () => {
    const videoMessage = {...message, type: 'video'};
    render(<Message message={videoMessage}/>);
    expect(screen.getByText(/Video message/)).toBeInTheDocument()
    expect(screen.getByText(/Test Message/)).toBeInTheDocument();
  })
  it("should render video message without text message", () => {
    const videoMessage = {...message, type: 'video', message: null};
    render(<Message message={videoMessage}/>);
    expect(screen.getByText(/Video message/)).toBeInTheDocument()
    expect(screen.queryByText(/Test Message/)).not.toBeInTheDocument();
  })
  it("should render image message with text message", () => {
    const videoMessage = {...message, type: 'image'};
    render(<Message message={videoMessage}/>);
    expect(screen.getByText(/Image message/)).toBeInTheDocument()
    expect(screen.getByText(/Test Message/)).toBeInTheDocument();
  })
  it("should render image message without text message", () => {
    const videoMessage = {...message, type: 'image', message: null};
    render(<Message message={videoMessage}/>);
    expect(screen.getByText(/Image message/)).toBeInTheDocument()
    expect(screen.queryByText(/Test Message/)).not.toBeInTheDocument();
  })
});
