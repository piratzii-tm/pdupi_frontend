import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KTextInput = ({ icon, placeholder, password, value, onChange }) => {
  return (
    <div
      className={
        "flex flex-row items-center px-2 gap-1 rounded-md w-72 bg-white border-2 border-barberry "
      }
    >
      <FontAwesomeIcon icon={icon} className={"size-6 text-bandicoot"} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={password ? "password" : ""}
        className={
          "w-full p-2 font-montserrat text-sm text-cod_gray placeholder-bandicoot border-0 focus:outline-none"
        }
      />
    </div>
  );
};

export default KTextInput;
