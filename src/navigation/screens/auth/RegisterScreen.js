import React, { useState } from "react";
import { useBackend } from "../../../hooks";
import { KButton, KHeader, KNavbar, KTextInput } from "../../../components";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
          SIGN UP
        </text>
        <div className={"h-20"}></div>
        <form onSubmit={(event) => client.register({ event, userData })}>
          <KTextInput
            icon={faEnvelope}
            placeholder={"E-mail"}
            value={userData.email}
            onChange={(value) => setUserData({ ...userData, email: value })}
          />
          <div className={"h-5"}></div>
          <KTextInput
            icon={faLock}
            placeholder={"Password"}
            password={true}
            value={userData.password}
            onChange={(value) => setUserData({ ...userData, password: value })}
          />
          <div className={"h-5"}></div>
          <KTextInput
            icon={faUser}
            placeholder={"Firstname"}
            value={userData.first_name}
            onChange={(value) =>
              setUserData({ ...userData, first_name: value })
            }
          />
          <div className={"h-5"}></div>
          <KTextInput
            icon={faUser}
            placeholder={"Lastname"}
            value={userData.last_name}
            onChange={(value) => setUserData({ ...userData, last_name: value })}
          />
          <div className={"h-10"}></div>
          <KButton title={"SIGN UP"} large={true} submit={true} />
        </form>
        <div className={"h-2"}></div>
        <text className={"text-barberry text-sm font-mohave px-10 text-center"}>
          Already have an account?{" "}
          <button className={"underline"} onClick={() => navigate("/")}>
            <text>Log in</text>
          </button>
        </text>
      </div>
    </KHeader>
  );
};

export default RegisterScreen;
