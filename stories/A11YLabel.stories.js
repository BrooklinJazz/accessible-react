import React from "react";
import Label from "../src/components/A11YLabel";

export default {
  title: "A11YLabel"
};

export const A11YLabel = () => {
  return (
    <Label label="My Example Label">
      <div>Example Div Labeled by label</div>
    </Label>
  );
};
