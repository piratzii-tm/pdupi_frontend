import {
  KButton,
  KCalendar,
  KContainer,
  KHeader,
  KNavbar,
  KPageTitle,
} from "../../components";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserTypes } from "../../constants/models";

const ClassesScreen = () => {
  const [userType, setUserType] = useState();
  useEffect(() => {
    const getUserType = async () => await Cookies.get("user");
    getUserType().then((type) => setUserType(type));
  }, []);
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
              //TODO Open modal for adding a class
            }}
          />
        )}
      </div>
    </KContainer>
  );
};

export default ClassesScreen;
