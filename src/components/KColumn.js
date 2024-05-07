import { useEffect, useState } from "react";
import { KClassModal } from "./index";
import KJoinClass from "./KJoinClass";
import { useBackend } from "../hooks";
import Cookies from "js-cookie";
import { UserTypes } from "../constants/models";

export const KColumn = ({ day }) => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const isCurrentDay =
    new Date(day.date).getDate() === new Date().getDate() &&
    new Date(day.date).getMonth() === new Date().getMonth();

  const [userType, setUserType] = useState();
  const { client } = useBackend();

  useEffect(() => {
    const getUserType = async () => await Cookies.get("user");
    getUserType().then((type) => setUserType(type));
  }, []);

  const [isJoinClassModalOpen, setIsJoinClassModalOpen] = useState(false);
  const [classId, setClassId] = useState(null);
  const [dayId, setDayId] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isJoinClassModalOpen ? "hidden" : "scroll";
    if (isJoinClassModalOpen) {
      window.scrollTo(0, 0);
    }
  }, [isJoinClassModalOpen]);

  return (
    <div>
      <div
        className={
          "bg-white w-52 h-12 flex border-x border-b border-gray justify-end p-2"
        }
      >
        <text className={"text-gray font-mohave text-xl mb-5"}>
          <text
            className={`font-bold ${
              isCurrentDay ? "bg-barberry rounded-full py-1 px-2" : ""
            }`}
          >
            {day.date.getDate()}
          </text>{" "}
          {daysOfWeek[day.date.getDay()]}
        </text>
      </div>
      {Object.keys(day.hours).map((hour, index) => {
        let classOfHour = day.hours[`${hour}`];

        let isFull =
          classOfHour &&
          classOfHour.class.occupied_slots === classOfHour.class.max_slots;

        let defaultStyle =
          "bg-yellow-200 w-48 flex flex-col p-4 border-l-4 border-yellow-400";

        let occupiedStyle =
          "bg-red-300 w-48 flex flex-col p-4 border-l-4 border-red-500";

        let defaultText = "text-yellow-400 font-koulen text-2xl";

        let occupiedText = "text-red-500 font-koulen text-2xl";

        return (
          <div
            className={
              "bg-white w-52 h-40 flex p-4 border-x border-b border-gray justify-evenly"
            }
          >
            {classOfHour && (
              <button
                className={isFull ? occupiedStyle : defaultStyle}
                onClick={() => {
                  setIsJoinClassModalOpen(true);
                  if (!isFull) {
                    setClassId(classOfHour.class.id);
                    setDayId(classOfHour.day_id);
                  }
                }}
              >
                <text className={isFull ? occupiedText : defaultText}>
                  {classOfHour.class.class_name.toUpperCase()}
                </text>
                <text className={"text-gray font-mohave text-xl"}>
                  {classOfHour.class.instructor_name}
                </text>
                <text className={"text-gray font-mohave text-xl"}>
                  {classOfHour.class.occupied_slots}/
                  {classOfHour.class.max_slots}
                </text>
              </button>
            )}
          </div>
        );
      })}
      {userType === UserTypes.client && (
        <div>
          {isJoinClassModalOpen && (
            <div
              className={
                "h-screen w-screen bg-black opacity-70 absolute top-0 left-0"
              }
            ></div>
          )}
          {isJoinClassModalOpen && (
            <KJoinClass
              setIsOpen={setIsJoinClassModalOpen}
              onSave={() => {
                client.me().then((me) =>
                  client
                    .join({
                      client_id: me.id,
                      day_id: dayId,
                      class_id: classId,
                    })
                    .then(() => setIsJoinClassModalOpen(false)),
                );
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};
