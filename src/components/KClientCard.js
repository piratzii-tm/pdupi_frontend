import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const KClientCard = ({
  name = "Name",
  status = "Active",
  creationDate = "2022/03/18",
}) => {
  return (
    <div className={"flex flex-col p-4 border-2 border-barberry  rounded-lg"}>
      <button
        className={"flex justify-between"}
        onClick={() => {
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        }}
      >
        <text className={"font-koulen text-3xl text-barberry"}>{name}</text>
        <FontAwesomeIcon icon={faXmark} className={"size-6 text-barberry"} />
      </button>
      <text className={"font-mohave text-barberry text-2xl"}>
        Status: <text className={"text-white"}>{status}</text>
      </text>
      <text className={"font-mohave text-barberry text-2xl"}>
        Account created at: <text className={"text-white"}>{creationDate}</text>
      </text>
    </div>
  );
};

export default KClientCard;
