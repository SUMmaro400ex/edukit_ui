import React, { useState } from "react";
import AppSelect from "./AppSelect.component";

export default _ => {
  const [active, updateActive] = useState("users");
  const onClick = active => _ => {
    updateActive(active);
  };
  return <AppSelect onClick={onClick} active={active} />;
};
