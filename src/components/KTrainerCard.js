import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { UserTypes } from "../constants/models";
import { KCancelAttendance } from "./index";
import { useBackend } from "../hooks";

const KTrainerCard = ({
  className = "Pilates class",
  antrenor = "Ciprian Enae",
  data = "2024/07/24",
  ora = "17:00",
  class_id = 0,
  day_id = 0,
}) => {
  const [userType, setUserType] = useState();
  useEffect(() => {
    const getUserType = async () => await Cookies.get("user");
    getUserType().then((type) => setUserType(type));
  }, []);

  const [isExitClassModalOpen, setIsExitClassModalOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isExitClassModalOpen ? "hidden" : "scroll";
    if (isExitClassModalOpen) {
      window.scrollTo(0, 0);
    }
  }, [isExitClassModalOpen]);

  const { client } = useBackend();

  return (
    <div className={"flex flex-col p-4 border-2 border-barberry  rounded-lg"}>
      <button
        className={"flex justify-between"}
        onClick={() => {
          if (userType === UserTypes.admin) {
            window.open(
              "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              "_blank",
            );
          } else {
            setIsExitClassModalOpen(true);
          }
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

      {userType === UserTypes.client && (
        <div>
          {isExitClassModalOpen && (
            <div
              className={
                "h-screen w-screen bg-black opacity-70 absolute top-0 left-0"
              }
            ></div>
          )}
          {isExitClassModalOpen && (
            <KCancelAttendance
              setIsOpen={setIsExitClassModalOpen}
              onSave={() => {
                client.me().then((me) =>
                  client
                    .exit({
                      client_id: me.id,
                      day_id,
                      class_id,
                    })
                    .then(() => setIsExitClassModalOpen(false)),
                );
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default KTrainerCard;
