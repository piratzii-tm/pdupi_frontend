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
                      ${transparent ? "border-4 border-barberry" : ""} py-2 px-4`}
      onClick={onClick}
      type={submit ? "submit" : "button"}
    >
      <text
        className={`font-koulen text-xl ${large ? (transparent ? "text-barberry" : "text-white") : "text-mineshaft"}`}
      >
        {title}
      </text>
    </button>
  );
};

export default KButton;
