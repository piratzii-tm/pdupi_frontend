import React, { useEffect, useState } from "react";
import { useBackend } from "../../../hooks";
import { KButton, KHeader, KNavbar, KTextInput } from "../../../components";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserTypes } from "../../../constants/models";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState(null);

  const { client, admin } = useBackend();
  const navigate = useNavigate();

  return (
    <KHeader>
      <div className={"absolute"}>
        <KNavbar shouldHaveRoutes={false} />
      </div>
      <div
        className={
          "flex flex-col h-screen w-screen items-center justify-center"
        }
      >
        <text className={"text-white text-6xl font-koulen px-10 text-center"}>
          LOG IN
        </text>
        <div className={"h-20"}></div>
        <form
          onSubmit={(event) =>
            userType === UserTypes.client
              ? client.login({ event, email, password })
              : admin.login({ event, email, password })
          }
        >
          <KTextInput
            icon={faEnvelope}
            placeholder={"E-mail"}
            value={email}
            onChange={(value) => setEmail(value)}
          />
          <div className={"h-5"}></div>
          <KTextInput
            icon={faLock}
            placeholder={"Password"}
            password={true}
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <div className={"h-10"}></div>

          <KButton
            title={"Log In"}
            large={true}
            submit={true}
            onClick={() => setUserType(UserTypes.client)}
          />
          <div className={"h-2"}></div>
          <KButton
            title={"Log In as admin"}
            large={true}
            transparent={true}
            submit={true}
            onClick={() => setUserType(UserTypes.admin)}
          />
        </form>
        <div className={"h-2"}></div>
        <text className={"text-barberry text-sm font-mohave px-10 text-center"}>
          Don't have an account yet?{" "}
          <button className={"underline"} onClick={() => navigate("/register")}>
            <text>Sign up</text>
          </button>
        </text>
      </div>
    </KHeader>
  );
};

export default LoginScreen;
