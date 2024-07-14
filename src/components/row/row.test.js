import { render, screen } from "@testing-library/react";
import Row from "./row";

describe("Row component", () => {
  it(" should match snapshot", () => {
    const { container } = render(<Row />);
    expect(container).toMatchSnapshot();
  });

  it("renders children", () => {
    const children = <div>Test Child</div>;
    render(<Row>{children}</Row>);
    expect(screen.getByText(/Test Child/)).toBeInTheDocument();
  });
});
