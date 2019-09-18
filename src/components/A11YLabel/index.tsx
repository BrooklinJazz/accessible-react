import React from "react";
import { v4 as uuid } from "uuid";

interface IProps extends React.HTMLAttributes<HTMLLabelElement> {
  label: string;
}

const A11YLabel = ({ children, label, ...labelProps }: IProps) => {
  const labelledById: string = uuid();
  const childId: string = uuid();
  const otherProps = React.isValidElement(children) ? children.props : {};
  return (
    <React.Fragment>
      <label {...labelProps} id={labelledById}>
        {label}
      </label>
      {React.cloneElement(
        // @ts-ignore
        children,
        {
          ...otherProps,
          "aria-labelledby": labelledById,
          id: `${childId} ${
            "id" in otherProps ? (otherProps as { id: string }) : ""
          }`
        }
      )}
    </React.Fragment>
  );
};

export default A11YLabel;
