import React, { useState } from "react";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { useBackend } from "../../../hooks/useBackend";

const RegisterScreen = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    is_active: true,
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  });

  const { client } = useBackend();

  return (
    <form onSubmit={(event) => client.register({ event, userData })}>
      <input
        type="text"
        value={userData.first_name}
        onChange={(e) =>
          setUserData({ ...userData, first_name: e.target.value })
        }
      />{" "}
      <input
        type="text"
        value={userData.last_name}
        onChange={(e) =>
          setUserData({ ...userData, last_name: e.target.value })
        }
      />{" "}
      <input
        type="text"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterScreen;
