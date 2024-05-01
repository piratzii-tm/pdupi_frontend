import { useEffect, useState } from "react";
import { useBackend } from "../../hooks";
import Cookies from "js-cookie";
import { UserTypes } from "../../constants/models";
import { KButton, KContainer, KHeader, KNavbar } from "../../components";
import Lottie from "react-lottie";
import { animations, images } from "../../assets";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState(null);
  const { client, admin } = useBackend();
  const navigate = useNavigate();

  // !Do not change the dependency, even if a warning appears in the console.
  useEffect(() => {
    const getUserType = async () => await Cookies.get("user");
    getUserType().then((type) => {
      setUserType(type);
      if (type === UserTypes.client) {
        client.me().then((response) => setUserData(response));
      } else {
        admin.me().then((response) => setUserData(response));
      }
    });
  }, []);

  if (userData === undefined || userData === null) {
    return (
      <KContainer>
        <div className={"h-screen w-full align-middle justify-center"}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animations.loading,
            }}
            style={{
              height: "20%",
              width: "20%",
            }}
          />
          <p className={"text-barberry text-6xl font-koulen px-10 text-center"}>
            Loading...
          </p>
          <p className={"text-barberry text-2xl font-koulen px-10 text-center"}>
            Waiting to much?{" "}
            <button
              onClick={() =>
                userType === UserTypes.client ? client.logout() : admin.logout()
              }
            >
              <p className={"text-white"}>Logout</p>
            </button>
          </p>
        </div>
      </KContainer>
    );
  }

  return (
    <KContainer>
      <KHeader spaceBeforeLine={false}>
        <KNavbar />
        <div className={"flex flex-row justify-between"}>
          <img src={images.home.section01} className={"hidden xl:block"} />
          <div className={"flex flex-col justify-end items-end p-20"}>
            <text className={"text-white font-koulen text-6xl sm:text-9xl"}>
              MAKE A CHANGE
            </text>
            <text className={"text-barberry font-mohave text-2xl sm:text-4xl"}>
              Start today.
            </text>
          </div>
        </div>
      </KHeader>
      <div className={"flex flex-col xl:flex-row border-y-4 border-barberry"}>
        <div
          className={
            "p-20 w-full xl:w-1/4 bg-homeSectionBackground bg-center bg-no-repeat bg-cover flex flex-col items-start justify-center px-20 xl:border-r-8 xl:border-barberry"
          }
        >
          <text className={"text-white font-koulen text-3xl sm:text-6xl"}>
            Antrenori
          </text>
          <text className={"text-barberry font-koulen text-3xl sm:text-6xl"}>
            personali
          </text>
          <p className={"font-mohave text-white text-l sm:text-xl mb-10"}>
            Antrenează-te alături de experți în health & fitness!{"\n"}
            Toți antrenorii personali Gym Fit sunt acreditați și au specializări
            internaționale.
          </p>
          <KButton
            title={"Gaseste-ti antrenorul"}
            onClick={() => {
              navigate("/trainers");
            }}
          />
        </div>
        <img
          src={images.home.section02}
          className={"w-full xl:w-3/4 xl:border-l-8 xl:border-barberry"}
        />
      </div>
      <div className={"flex flex-col sm:flex-row border-y-8 border-barberry"}>
        <img src={images.home.section031} className={"w-full sm:w-1/3"} />
        <img src={images.home.section032} className={"w-full sm:w-1/3"} />
        <img src={images.home.section033} className={"w-full sm:w-1/3"} />
      </div>
      <div className={"flex flex-col xl:flex-row border-t-8 border-barberry"}>
        <img
          src={images.home.section04}
          className={"w-full xl:w-3/4 xl:border-r-8 xl:border-barberry"}
        />
        <div
          className={
            "p-20 w-full xl:w-1/4 bg-homeSectionBackground bg-center bg-no-repeat bg-cover flex flex-col items-start justify-center px-20 xl:border-l-8 xl:border-barberry"
          }
        >
          <text className={"text-white font-koulen text-3xl sm:text-6xl"}>
            Clase
          </text>
          <p className={"font-mohave text-white text-l sm:text-xl mb-10"}>
            Există clasa potrivită de group fitness pentru toți, în funcție de
            vârstă, obiective de health & fitness și condiție fizică. Alege-ți
            clasa favorită și bucură-te de experiențe inedite de antrenament pe
            coregrafii speciale și muzică incendiară!
          </p>
          <KButton
            title={"Alege-ti clasa"}
            onClick={() => {
              navigate("/classes");
            }}
          />
        </div>
      </div>
    </KContainer>
  );
};

export default HomeScreen;
