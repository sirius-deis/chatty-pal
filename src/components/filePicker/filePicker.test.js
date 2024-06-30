import { render, screen, fireEvent } from "@testing-library/react";
import FilePicker from "./filePicker";

const icons = "";

describe("FilePicker component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <FilePicker size={3} icon={icons}></FilePicker>
    );
    expect(container).toMatchSnapshot();
  });
  it("should render a file input element", () => {
    render(<FilePicker></FilePicker>);
    expect(screen.getByTestId("file")).toBeInTheDocument();
  });
  it("should render an icon", () => {
    render(<FilePicker></FilePicker>);
    expect(screen.getByTestId("file-icon")).toBeInTheDocument();
  });
  it("should fire a change event when a file is selected", () => {
    const fn = jest.fn();
    render(<FilePicker onChange={fn}></FilePicker>);
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    fireEvent.change(screen.getByTestId("file"), {
      target: { files: [file] },
    });
    expect(fn).toHaveBeenCalled();
  });
});
