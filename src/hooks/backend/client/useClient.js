import { useContext } from "react";
import { AuthenticationProvider } from "../../../constants/contexts";
import { useNavigate } from "react-router-dom";
import { api, header } from "../../../constants/backend";
import Cookies from "js-cookie";

export const useClient = () => {
  const { setIsLogged } = useContext(AuthenticationProvider);
  const navigate = useNavigate();

  const register = async ({ event, userData }) => {
    event.preventDefault();

    try {
      const response = await fetch(api.client.register, {
        method: "POST",
        headers: header.json,
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      Cookies.set("token", data.access_token);
      Cookies.set("user", "client");
      setIsLogged(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async ({ event, email, password }) => {
    event.preventDefault();

    try {
      const response = await fetch(api.client.login, {
        method: "POST",
        headers: header.auth,
        body: new URLSearchParams({
          username: email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      Cookies.set("token", data.access_token);
      setIsLogged(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.set("token", null);
    Cookies.set("user", null);
    setIsLogged(false);
  };

  const me = async () => {
    try {
      const token = await Cookies.get("token");
      const response = await fetch(api.client.me, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const byId = async ({ client_id }) => {
    try {
      const response = await fetch(api.client.byId(client_id), {
        method: "GET",
        headers: header.json,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const all = async () => {
    try {
      const response = await fetch(api.client.all, {
        method: "GET",
        headers: header.json,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const classes = async ({ client_id }) => {
    try {
      const response = await fetch(api.client.classes(client_id), {
        method: "GET",
        headers: header.json,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const join = async ({ client_id, day_id, class_id }) => {
    try {
      const response = await fetch(api.client.join, {
        method: "POST",
        headers: header.json,
        body: {
          client_id,
          day_id,
          class_id,
        },
      });

      if (!response.ok) {
        throw new Error("Could not join the class");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const exit = async ({ client_id, day_id, class_id }) => {
    try {
      const response = await fetch(api.client.exit, {
        method: "POST",
        headers: header.json,
        body: {
          client_id,
          day_id,
          class_id,
        },
      });

      if (!response.ok) {
        throw new Error("Could not exit the class");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    register,
    logout,
    me,
    byId,
    all,
    classes,
    join,
    exit,
  };
};
