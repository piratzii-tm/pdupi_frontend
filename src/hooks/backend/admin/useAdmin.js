import { useContext } from "react";
import { AuthenticationProvider } from "../../../constants/contexts";
import { api, header } from "../../../constants/backend";
import Cookies from "js-cookie";

export const useAdmin = () => {
  const { setIsLogged } = useContext(AuthenticationProvider);

  const login = async ({ event, email, password }) => {
    event.preventDefault();

    try {
      const response = await fetch(api.admin.login, {
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
      Cookies.set("user", "admin");
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
      const response = await fetch(api.admin.me, {
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

  const addTrainer = async ({ first_name, last_name }) => {
    try {
      const response = await fetch(api.admin.addTrainer, {
        method: "POST",
        headers: header.json,
        body: JSON.stringify({
          first_name,
          last_name,
        }),
      });

      if (!response.ok) {
        throw new Error("Could not join the class");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addClass = async ({
    class_name,
    instructor_id,
    max_slots,
    day,
    month,
    starting_hour,
  }) => {
    try {
      const response = await fetch(api.admin.addClass, {
        method: "POST",
        headers: header.json,
        body: JSON.stringify({
          class_name,
          instructor_id,
          max_slots,
          day,
          month,
          starting_hour,
        }),
      });

      if (!response.ok) {
        throw new Error("Could not join the class");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    logout,
    me,
    addClass,
    addTrainer,
  };
};
