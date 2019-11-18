import React, { useState } from "react";
import Search from "./Search.component";

export default props => {
  const [collapsed, updateCollapsed] = useState(true);
  const onClick = collapsed => _ => updateCollapsed(collapsed);
  return <Search onClick={onClick} collapsed={collapsed} {...props} />;
};
