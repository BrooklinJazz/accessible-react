import React, { useState } from "react";
import Checkbox from "../src/components/A11YCheckbox";

export default {
  title: "A11YCheckbox"
};

export const A11YCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onClick={() => setChecked(!checked)} />;
};
