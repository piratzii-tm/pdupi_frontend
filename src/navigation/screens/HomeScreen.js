import { useEffect, useState } from "react";
import { useBackend } from "../../hooks";
import Cookies from "js-cookie";
import { UserTypes } from "../../constants/models";
import { KContainer, KHeader, KNavbar } from "../../components";
import Lottie from "react-lottie";
import { animations } from "../../assets";

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);
  const [userType, setUserType] = useState(null);
  const { client, admin } = useBackend();

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
      <KHeader>
        <KNavbar />
      </KHeader>
      <h1 className={"text-8xl text-white"}>Hello, {userData.first_name}</h1>
    </KContainer>
  );
};

export default HomeScreen;
