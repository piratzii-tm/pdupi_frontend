import Cookies from "js-cookie";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationProvider } from "../constants/contexts/AuthenticationProvider";

export const useAuthentication = () => {
  const { setIsLogged } = useContext(AuthenticationProvider);
  const navigate = useNavigate();

  const handleRegisterClient = async ({ event, userData }) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/client/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      Cookies.set("token", data.access_token);
      setIsLogged(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginClient = async ({ event, email, password }) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/client/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
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

  const handleLogout = () => {
    Cookies.set("token", null);
    setIsLogged(false);
  };

  return {
    client: {
      register: handleRegisterClient,
      login: handleLoginClient,
    },
    handleLogout,
  };
};
