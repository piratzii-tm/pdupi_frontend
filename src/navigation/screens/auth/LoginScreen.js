import React, { useState } from "react";
import { useBackend } from "../../../hooks";
import { KTextInput } from "../../../components";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { client, admin } = useBackend();

  return (
    <div>
      <form onSubmit={(event) => client.login({ event, email, password })}>
        <KTextInput value={email} onChange={(value) => setEmail(value)} />
        <KTextInput value={password} onChange={(value) => setPassword(value)} />
        <button type="submit">Login</button>
      </form>
      <form onSubmit={(event) => admin.login({ event, email, password })}>
        <KTextInput value={email} onChange={(value) => setEmail(value)} />
        <KTextInput value={password} onChange={(value) => setPassword(value)} />
        <button type="submit">Login as admin</button>
      </form>
    </div>
  );
};

export default LoginScreen;
