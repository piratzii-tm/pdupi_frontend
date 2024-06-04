import { KButton, KPlusButton, KTextInput } from "./index";
import { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const KTrainerModal = ({ setIsOpen, onSave }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[2.3rem] ">
      <div className="flex flex-col space-y-9 items-center px-16 py-8">
        <text className="text-[4rem] font-medium font-mohave text-mineshaft text-center">
          Add Trainer
        </text>
        <KPlusButton rel />
        <div className="space-y-4">
          <KTextInput
            placeholder="First name"
            onChange={setFirstName}
            fill
            value={firstName}
            icon={faUser}
          />
          <KTextInput
            placeholder="Last name"
            onChange={setLastName}
            fill
            value={lastName}
            icon={faUser}
          />
        </div>
        <div className="flex flex-wrap flex-col items-center space-y-4">
          <KButton title="Save" onClick={() => onSave(firstName, lastName)} />
          <KButton
            title="Cancel"
            transparent
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default KTrainerModal;
