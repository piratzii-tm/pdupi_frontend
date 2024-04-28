import { useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import {
  KPageTitle,
  KClientCard,
  KTrainerCard,
  KClientClassCard,
  KButton,
  KTextInput,
} from "../../../components";
import { images } from "../../../assets";

export const ComponentsScreen = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <body className={"flex h-full p-4 flex-col bg-gray-500 gap-2"}>
      <KPageTitle title="Components samples" />
      <text className={"text-2xl font-bold"}>KHeader</text>
      <KPageTitle title={"Title"} />
      <KPageTitle client />
      <KPageTitle trainer />

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
        image={images.default}
        nume={"Jonny"}
        prenume={"Bravo"}
      />
    </body>
  );
};
