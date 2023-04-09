import Search from "./Search";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

function MockSVGComponent() {
  return <svg></svg>;
}
jest.mock("@/../public/icons/search-icon.svg", () => MockSVGComponent);

describe("Search", () => {
  const value = "";
  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn();
  beforeEach(() => {
    render(
      <Search onChange={mockOnChange} onSubmit={mockOnSubmit} value={value} />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it("renders", () => {});
  it("contains form with an input and submit button", () => {
    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("calls onsubmit function when button is clicked", async () => {
    await userEvent.click(screen.getByRole('button'));
    expect(mockOnSubmit).toBeCalledTimes(1);
  });
  it("calls onsubmit function when input has an enter event", async () => {
    await userEvent.type(screen.getByRole('textbox'),  '{enter}');
    expect(mockOnSubmit).toBeCalledTimes(1);
  });
  it("calls onchange function when input value changes", async () => {
    await userEvent.type(screen.getByRole('textbox'),  'value');
    expect(mockOnChange).toBeCalled();
  });
});
