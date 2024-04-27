import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginScreen,
  RegisterScreen,
  HomeScreen,
  ComponentsScreen,
  TrainersScreen,
} from "./screens";
import { useContext } from "react";
import { AuthenticationProvider } from "../constants/contexts";

const Navigation = () => {
  const { isLogged } = useContext(AuthenticationProvider);

  return (
    <BrowserRouter>
      {!isLogged ? (
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/"} element={<HomeScreen />} />
          <Route path={"/trainers"} element={<TrainersScreen />} />
          <Route path="/components" element={<ComponentsScreen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Navigation;
