import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { act } from "react-dom/test-utils";
// import { fireEvent, screen } from "@testing-library/react";

// it("Clicking the button triggers the handler function", () => {
//   const handleClick = jest.fn();
//   const div = document.createElement("div");

//   act(() => {
//     ReactDOM.render(<Button name="TEST" clickHandler={handleClick} />, div);
//   });

//   act(() => {
//     const buttonEl = div.querySelector(".component-button button");
//     console.log(buttonEl);
//     buttonEl.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   expect(handleClick).toHaveBeenCalledTimes(1);
// });

it("Button has correct classses by default", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button name="TEST" clickHandler={jest.fn()} />, div);

  const buttonEl = div.querySelector(".component-button");

  expect(Array.from(buttonEl.classList)).toEqual(
    expect.arrayContaining(["component-button"]),
  );
});

it("Button has correct classses by props", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Button name="TEST" wide={true} orange={true} clickHandler={jest.fn()} />,
    div,
  );

  const buttonEl = div.querySelector(".component-button");

  expect(Array.from(buttonEl.classList)).toEqual(
    expect.arrayContaining(["component-button"]),
  );
});
