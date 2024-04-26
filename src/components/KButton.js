import React from "react";

const KButton = ({ title = "press me", onClick, large, transparent }) => {
  return (
    <button
      className={`p-2 ${transparent ? "" : "bg-barberry"} rounded-md ${large ? "w-72" : "w-fit"}
                      ${transparent ? "border-2 border-barberry" : ""}`}
      onClick={onClick}
    >
      <text
        className={`font-montserrat font-semibold text-xl ${large ? "text-white" : "text-cod_gray"}
                    ${transparent ? "text-barberry" : "text-white"}`}
      >
        {title}
      </text>
    </button>
  );
};

export default KButton;
