import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ChatBox from "./chatBox";
import { createStore } from "redux";

const INITIAL_STATE = { user: { user: { id: 1 } } };

const messages = [
  { message: "Hello", senderId: 1, createdAt: "" },
  { message: "Hi", senderId: 2, createdAt: "" },
];

const props = {
  id: 1,
  messages,
  title: "Some chat",
  unreadMessagesCount: 2,
};

const reducer = (state = INITIAL_STATE) => {
  return state;
};

const store = createStore(reducer);

describe("ChatBox component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ChatBox {...props} />
        </Provider>
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render messages", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ChatBox {...props} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
  });
  it("should render a chat title", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ChatBox {...props} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Some chat/)).toBeInTheDocument();
  });
  it("should render a chat icon with a letter as there is no picture provided", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ChatBox {...props} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("S")).toBeInTheDocument();
  });
  it("should render without online sign", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ChatBox {...props} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("status")).not.toBeInTheDocument();
  });
  it("should render with online sign", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ChatBox {...props} isOnline />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("status")).toBeInTheDocument();
  });
});
