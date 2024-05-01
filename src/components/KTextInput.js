import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KTextInput = ({ icon, placeholder, password, value, onChange, fill }) => {
  return (
    <div
      className={`flex flex-row items-center px-5 py-1 gap-1 rounded-xl bg-white border-2 border-barberry ${fill ? "" : "w-72"}`}
    >
      <FontAwesomeIcon icon={icon} className={"size-5 text-bandicoot"} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={password ? "password" : ""}
        className={
          "w-full p-2 font-montserrat text-sm text-mineshaft placeholder-bandicoot border-0 focus:outline-none"
        }
      />
    </div>
  );
};

export default KTextInput;
