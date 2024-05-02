import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const KPlusButton = ({ onClick, rel }) => {
  return (
    <button
      className={`flex p-10 m-10 rounded-full bg-barberry ${rel ? "" : "absolute bottom-0 right-0"}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPlus} color="white" />
    </button>
  );
};

export default KPlusButton;
