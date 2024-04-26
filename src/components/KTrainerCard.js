import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const KTrainerCard = ({
  className = "Pilates class",
  antrenor = "Ciprian Enae",
  data = "2024/07/24",
  ora = "17:00",
}) => {
  return (
    <div className={"flex flex-col p-4 border-2 border-barberry  rounded-lg"}>
      <button
        className={"flex justify-between"}
        onClick={() => {
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        }}
      >
        <text className={"font-koulen text-3xl text-barberry"}>
          {className}
        </text>
        <FontAwesomeIcon icon={faXmark} className={"size-6 text-barberry"} />
      </button>
      <text className={"font-mohave text-barberry text-2xl"}>
        Antrenor: <text className={"text-white"}>{antrenor}</text>
      </text>
      <text className={"font-mohave text-barberry text-2xl"}>
        Data: <text className={"text-white"}>{data}</text>
      </text>
      <text className={"font-mohave text-barberry text-2xl"}>
        Ora: <text className={"text-white"}>{ora}</text>
      </text>
    </div>
  );
};

export default KTrainerCard;
