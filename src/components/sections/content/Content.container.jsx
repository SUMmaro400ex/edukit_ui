import React, { useState } from "react";
import { Users } from "../index";

export default _ => {
  const [active] = useState("users");
  return { users: <Users /> }[active];
};
