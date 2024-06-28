import { render, screen } from "@testing-library/react";
import List from "./list";

const list = ["Item 1", "Item 2"];

describe("List component", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <List>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </List>
    );
    expect(container).toMatchSnapshot();
  });
  it("should contain provided items", () => {
    render(
      <List>
        {list.map((item) => (
          <div>{item}</div>
        ))}
      </List>
    );
    expect(screen.getByText(/Item 1/)).toBeInTheDocument();
    expect(screen.getByText(/Item 2/)).toBeInTheDocument();
  });
});
