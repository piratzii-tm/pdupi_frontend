import React from "react";

const KButton = ({
  title = "press me",
  onClick,
  large,
  transparent,
  submit,
}) => {
  return (
    <button
      className={`p-2 ${transparent ? "" : "bg-barberry"} rounded-xl ${large ? "w-72" : "w-fit"}
                      ${transparent ? "border-4 border-barberry" : ""}`}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      <text
        className={`font-montserrat font-semibold text-xl ${large ? (transparent ? "text-barberry" : "text-white") : "text-cod_gray"}`}
      >
        {title}
      </text>
    </button>
  );
};

export default KButton;
