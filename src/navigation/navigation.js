import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import { useContext } from "react";
import { AuthenticationProvider } from "../constants/contexts/AuthenticationProvider";
import { ComponentsScreen } from "./screens/auth/ComponentsScreen";

const Navigation = () => {
  const { isLogged } = useContext(AuthenticationProvider);

  return (
    <BrowserRouter>
      {!isLogged ? (
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/components" element={<ComponentsScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Navigation;
