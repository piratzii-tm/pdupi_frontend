import KButton from "../../../components/KButton";
import KTextInput from "../../../components/KTextInput";
import { useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { KHeader } from "../../../components/KHeader";
import KClientCard from "../../../components/KClientCard";
import KTrainerCard from "../../../components/KTrainerCard";
import KClientClassCard from "../../../components/KClientClassCard";

export const ComponentsScreen = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <body className={"flex h-full p-4 flex-col bg-gray-500 gap-2"}>
      <text className={"text-2xl font-bold"}>KHeader</text>
      <KHeader title={"Title"} />
      <KHeader client />
      <KHeader trainer />

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
      <text className={"text-2xl font-bold"}>KClientCard</text>
      <div className={"flex flex-col border-0"}>
        <text>Client card</text>
        <KClientCard name="Name" status="Active" creationDate="2022/03/18" />
      </div>
      <text className={"text-2xl font-bold"}>KTrainerCard</text>
      <div className={"flex flex-col border-0"}>
        <text>Trainer card</text>
        <KTrainerCard
          className="Pilates class"
          antrenor="Ciprian Enae"
          data="2024/07/24"
          ora="17:00"
        />
      </div>
      <text className={"text-2xl font-bold"}>KClientClassCard</text>
      <KClientClassCard
        image={require("../../../assets/images/devegion.png")}
        nume={"Jonny"}
        prenume={"Bravo"}
      />
    </body>
  );
};
