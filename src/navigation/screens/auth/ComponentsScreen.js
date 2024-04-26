import KButton from "../../../components/KButton";
import KTextInput from "../../../components/KTextInput";
import { useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export const ComponentsScreen = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <body className={"flex h-full p-4 flex-col bg-gray-500 gap-2"}>
      <text className={"text-2xl font-bold"}>KButton</text>
      <div className={"flex flex-col"}>
        <text>No params</text>
        <KButton
          title={"No params"}
          onClick={() => {
            console.log("Nice press");
          }}
        />
      </div>
      <div className={"flex flex-col"}>
        <text>Transparent button</text>
        <KButton
          title={"Transparent button"}
          onClick={() => {
            console.log("Nice press");
          }}
          transparent
        />
      </div>
      <div className={"flex flex-col"}>
        <text>Large button</text>
        <KButton
          title={"Large button"}
          onClick={() => {
            console.log("Nice press");
          }}
          large
        />
      </div>
      <div className={"flex flex-col"}>
        <text>Large transparent button</text>
        <KButton
          title={"Large transparent button"}
          onClick={() => {
            console.log(text);
          }}
          large
          transparent
        />
      </div>

      <text className={"text-2xl font-bold"}>KTextInput</text>
      <div className={"flex flex-col border-0"}>
        <text>Text input</text>
        <KTextInput
          icon={faEnvelope}
          placeholder={"Email"}
          value={text}
          onChange={setText}
        />
      </div>
      <div className={"flex flex-col border-0"}>
        <text>Password input</text>
        <KTextInput
          icon={faLock}
          placeholder={"Password"}
          password
          value={password}
          onChange={setPassword}
        />
      </div>
    </body>
  );
};
