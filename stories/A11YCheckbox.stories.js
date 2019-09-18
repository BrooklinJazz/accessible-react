import React, { useState } from "react";
import Checkbox, {
  A11YCheckmark as Checkmark
} from "../src/components/A11YCheckbox";

export default {
  title: "A11YCheckbox"
};

export const A11YCheckbox = () => {
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onClick={() => setChecked(!checked)} />;
};

export const A11YCheckboxWithoutCheck = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox checked={checked} onClick={() => setChecked(!checked)}>
      {" "}
    </Checkbox>
  );
};
export const A11YCheckboxWithCustomCheck = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox checked={checked} onClick={() => setChecked(!checked)}>
      {/* you could also use classname or any other span props */}
      <Checkmark style={{ background: "red" }} />
    </Checkbox>
  );
};
