import React from "react";
import { v4 as uuid } from "uuid";

interface IProps extends React.HTMLAttributes<HTMLLabelElement> {
  label: string;
}

const A11YLabel = ({ children, label, ...labelProps }: IProps) => {
  const labelledById: string = `${label} ${uuid()}`;
  return (
    <React.Fragment>
      <label {...labelProps}>{label}</label>
      {React.cloneElement(
        // @ts-ignore
        children,
        { "aria-labelledby": labelledById }
      )}
    </React.Fragment>
  );
};

export default A11YLabel;
