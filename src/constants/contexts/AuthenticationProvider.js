import { createContext } from "react";

export const AuthenticationProvider = createContext({
  isLogged: false,
  setIsLogged: () => {},
});
