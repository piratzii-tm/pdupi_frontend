import { useEffect, useState } from "react";
import { useBackend } from "../../hooks";
import Cookies from "js-cookie";
import { UserTypes } from "../../constants/models";
import { KContainer, KHeader, KNavbar } from "../../components";

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);
  const { client, admin } = useBackend();

  // !Do not change the dependency, even if a warning appears in the console.
  useEffect(() => {
    const getUserType = async () => await Cookies.get("user");
    getUserType().then((type) => {
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
        <h1>Loading...</h1>
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
