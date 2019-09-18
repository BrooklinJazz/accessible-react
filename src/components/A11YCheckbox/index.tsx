import React from "react";
import style from "./A11YCheckbox.module.scss";

interface IProps
  extends Exclude<
    React.HTMLAttributes<HTMLInputElement>,
    "role" | "aria-checked"
  > {
  checked: boolean;
  onClick: () => void;
}

const A11YCheckbox = (props: IProps) => (
  <div
    {...props}
    role="checkbox"
    aria-checked={props.checked}
    onClick={props.onClick}
    tabIndex={0}
    className={`${style.Checkbox} ${props.checked ? style.checked : ""} ${
      props.className
    }`}
  ></div>
);

export default A11YCheckbox;
