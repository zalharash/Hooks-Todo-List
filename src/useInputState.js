import { useState } from "react";

export default InitialValue => {
  const [value, setValue] = useState(InitialValue);

  return {
    value,
    onChange: event => {
      setValue(event.target.value);
    },
    reset: () => {
      setValue("");
    }
  };
};
