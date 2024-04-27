import React, { useState } from "react";
import { useBackend } from "../../../hooks";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { client } = useBackend();

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
