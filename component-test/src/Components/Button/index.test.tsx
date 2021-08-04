import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
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

  it("change backgroundColor and hoverColor Props", () => {
    const backgroundColor = "#FF1744";
    const hoverColor = "#F01440";
    render(
      <Button
        label="ButtonTest"
        backgroundColor={backgroundColor}
        hoverColor={hoverColor}
      />
    );

    const parent = screen.getByText("ButtonTest").parentElement;
    expect(parent).toHaveStyleRule("background-color", backgroundColor);
    expect(parent).toHaveStyleRule("background-color", hoverColor, {
      modifier: ":hover",
    });
  });

  it("click the button", () => {
    const handleClick = jest.fn();
    render(<Button label="ButtonTest" onClick={handleClick} />);

    const label = screen.getByText("ButtonTest");
    // Button 컴포넌트가 한번도 클릭되지 않았음
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(label); // 클릭 이벤트 fire
    // Button 컴포넌트의 onClick 메소드가 1회 실행되었음
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
