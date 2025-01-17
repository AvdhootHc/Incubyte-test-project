import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./componants/Calculator";

test("renders calculator component correctly", () => {
  render(<Calculator />);
  const result = screen.getByTestId("result");
  expect(result).toBeInTheDocument();
  const button1 = screen.getByTestId("button-1");
  expect(button1).toBeInTheDocument();
});
