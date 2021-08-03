import React from "react";
import { screen, render } from "@testing-library/react";
import "jest-styled-components";

import { Button } from "./index";

describe("<Button/>", () => {
  it("render component correctly", () => {
    const { container } = render(<Button label="Button Test" />);
    const label = screen.getByText("Button Test");
    expect(label).toBeInTheDocument();
    const parent = label.parentElement;
    expect(parent).toHaveStyleRule("background-color", "#304FFE");
    expect(parent).toHaveStyleRule("background-color", "#1E40FF", {
      modifier: ":hover",
    });

    expect(container).toMatchSnapshot();
  });
});
