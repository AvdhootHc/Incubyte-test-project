import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./componants/Calculator";

test("renders calculator component correctly", () => {
  render(<Calculator />);
  const result = screen.getByTestId("result");
  expect(result).toBeInTheDocument();
  const button1 = screen.getByTestId("button-1");
  expect(button1).toBeInTheDocument();
});

test("updates input on number button click", () => {
  render(<Calculator />);
  fireEvent.click(screen.getByTestId("button-1"));
  const result = screen.getByTestId("result");

  expect(result).toHaveTextContent("1");

  fireEvent.click(screen.getByTestId("button-2"));
  expect(result).toHaveTextContent("12");
});

test("performs addition correctly", () => {
  render(<Calculator />);

  fireEvent.click(screen.getByTestId("button-2"));
  fireEvent.click(screen.getByTestId("button-plus"));
  fireEvent.click(screen.getByTestId("button-3"));
  fireEvent.click(screen.getByTestId("button-equal"));

  const result = screen.getByTestId("result");

  expect(result).toHaveTextContent("5");
});

test("performs subtraction correctly", () => {
  render(<Calculator />);
  fireEvent.click(screen.getByTestId("button-5"));
  fireEvent.click(screen.getByTestId("button-minus"));
  fireEvent.click(screen.getByTestId("button-3"));
  fireEvent.click(screen.getByTestId("button-equal"));
  const result = screen.getByTestId("result");
  expect(result).toHaveTextContent("2");
});
