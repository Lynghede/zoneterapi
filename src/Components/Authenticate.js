import React, { useState } from "react";

const Authenticate = ({ children }) => {
  const [pass, setPass] = useState();

  if (pass === "hej") return children;

  return (
    <input
      type="password"
      value={pass}
      onChange={(e) => setPass(e.target.value)}
    />
  );
};
export default Authenticate;
