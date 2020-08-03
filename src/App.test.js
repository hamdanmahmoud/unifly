import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders schedule link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Schedule/i);
  expect(linkElement).toBeInTheDocument();
});
