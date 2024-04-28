import { useBackend } from "../hooks";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserTypes } from "../constants/models";
import { images } from "../assets";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Colors } from "../constants/theming";
import { Drawer } from "@mui/material";

export const KNavbar = () => {
  const [userType, setUserType] = useState(null);
  const [drawerActive, setDrawerActive] = useState(false);

  const { client, admin } = useBackend();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserType = async () => await Cookies.get("user");
    getUserType().then((type) => setUserType(type));
  }, []);

  const main = "http://localhost:3000";
  const location = window.location.href.split(main)[1].trim();
  const adminNavigation = [
    { path: "/trainers", title: "Trainers" },
    { path: "/classes", title: "Classes" },
    { path: "/clients", title: "Clients" },
  ];
  const clientNavigation = [
    { path: "/trainers", title: "Trainers" },
    { path: "/classes", title: "Classes" },
    { path: "/profile", title: "Profile" },
  ];
  const style = {
    default: "text-white text-3xl font-mohave",
    active: "text-barberry text-3xl font-mohave",
  };

  const navigationRoutes = () => (
    <React.Fragment>
      {(userType === UserTypes.client ? clientNavigation : adminNavigation).map(
        (route) => (
          <button onClick={() => navigate(route.path)}>
            <text
              className={location === route.path ? style.active : style.default}
            >
              {route.title}
            </text>
          </button>
        ),
      )}
      <button
        onClick={() =>
          userType === UserTypes.client ? client.logout() : admin.logout()
        }
      >
        <text className={"text-white text-3xl font-mohave"}>Logout</text>
      </button>
    </React.Fragment>
  );

  return (
    <div
      className={
        "h-1/5 px-10 pt-2 mb-20 w-full flex flex-row justify-between align-middle"
      }
    >
      <button onClick={() => navigate("/")}>
        <img alt={"logo"} src={images.logo} className={"w-2/5 sm:w-1/5"} />
      </button>
      <div className={"hidden xl:flex w-1/3 flex-row justify-between"}>
        {navigationRoutes()}
      </div>

      <button
        className={"block xl:hidden  justify-end align-middle"}
        onClick={() => setDrawerActive(true)}
      >
        <FontAwesomeIcon
          icon={faBars}
          color={Colors.barberry}
          className={"w-20 h-20"}
        />
      </button>
      <Drawer
        open={drawerActive}
        onClose={() => setDrawerActive(false)}
        anchor={"right"}
      >
        <div className={"px-10 h-full bg-cod_gray"}>
          <div className={"h-1/2 flex flex-col justify-evenly "}>
            {navigationRoutes()}
          </div>
        </div>
      </Drawer>
    </div>
  );
};
