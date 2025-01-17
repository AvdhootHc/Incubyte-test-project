import { render, screen } from "@testing-library/react";
import Calculator from "./componants/Calculator";

test("renders calculator component correctly", () => {
  render(<Calculator />);
  const result = screen.getByTestId("result");
  expect(result).toBeInTheDocument();
  const button = screen.getByText("1");
  expect(button).toBeInTheDocument();
});
