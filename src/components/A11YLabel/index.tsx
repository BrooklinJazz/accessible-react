import React from "react";
import { v4 as uuid } from "uuid";

interface IProps extends React.HTMLAttributes<HTMLLabelElement> {
  label: string;
}

const A11YLabel = ({ children, label, ...labelProps }: IProps) => {
  const labelledById: string = `${label} ${uuid()}`;
  const childrenWithLabel = React.Children.map(children, child =>
    React.cloneElement(child as any, { "aria-labelledby": labelledById })
  );
  return (
    <>
      <label {...labelProps}>{label}</label>
      {...childrenWithLabel}
    </>
  );
};

export default A11YLabel;
