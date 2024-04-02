import React, { useState } from "react";
import { useAuthentication } from "../../../hooks/useAuthentication";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { client } = useAuthentication();

  return (
    <form onSubmit={(event) => client.login({ event, email, password })}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginScreen;
