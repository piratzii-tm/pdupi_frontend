import {
  KButton,
  KCalendar,
  KClassModal,
  KContainer,
  KHeader,
  KNavbar,
  KPageTitle,
} from "../../components";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserTypes } from "../../constants/models";
import { useBackend } from "../../hooks";

const ClassesScreen = () => {
  const [userType, setUserType] = useState();
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const { admin } = useBackend();

  useEffect(() => {
    const getUserType = async () => await Cookies.get("user");
    getUserType().then((type) => setUserType(type));
  }, []);

  useEffect(() => {
    document.body.style.overflow = isAddClassModalOpen ? "hidden" : "scroll";
    if (isAddClassModalOpen) {
      window.scrollTo(0, 0);
    }
  }, [isAddClassModalOpen]);

  return (
    <KContainer>
      <KHeader>
        <KNavbar />
        <KPageTitle classes={true} />
      </KHeader>
      <div className={"px-20 pt-20"}>
        <KCalendar />
      </div>
      <div className={"w-full flex justify-center items-center p-20"}>
        {userType === UserTypes.admin && (
          <KButton
            title={"Add class"}
            onClick={() => {
              setIsAddClassModalOpen(true);
            }}
          />
        )}
      </div>
      {isAddClassModalOpen && (
        <div
          className={"h-full w-full bg-black opacity-70 absolute top-0"}
        ></div>
      )}
      {isAddClassModalOpen && (
        <KClassModal
          setIsOpen={setIsAddClassModalOpen}
          onSave={(
            className,
            selectedTrainerId,
            selectedDay,
            selectedHour,
            capacity,
          ) => {
            admin.addClass({
              class_name: className,
              instructor_id: selectedTrainerId,
              max_slots: capacity,
              day: new Date(selectedDay).getDate(),
              month: new Date(selectedDay).getMonth() + 1,
              starting_hour: selectedHour,
            });
            setIsAddClassModalOpen(false);
          }}
        />
      )}
    </KContainer>
  );
};

export default ClassesScreen;
