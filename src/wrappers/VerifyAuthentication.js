import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthenticationProvider } from "../constants/contexts/AuthenticationProvider";

const VerifyAuthentication = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLogged(token !== "null");
  }, []);

  return (
    <AuthenticationProvider.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthenticationProvider.Provider>
  );
};

export default VerifyAuthentication;
