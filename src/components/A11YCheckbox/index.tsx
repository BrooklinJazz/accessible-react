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

export const A11YCheckmark = ({
  className,
  ...restProps
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden
    {...restProps}
    className={`${style.Check} ${className ? className : ""}`}
  />
);

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
  >
    {props.checked && (props.children || <A11YCheckmark />)}
  </div>
);

export default A11YCheckbox;
