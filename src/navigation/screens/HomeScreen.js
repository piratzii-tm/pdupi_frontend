import { useEffect, useState } from "react";
import { useBackend } from "../../hooks";
import Cookies from "js-cookie";
import { UserTypes } from "../../constants/models";
import { KNavbar } from "../../components";

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
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className={"bg-blue-300"}>
      <KNavbar />
      <h2>Hello, {userData.first_name}</h2>
      <button onClick={client.logout}>Logout</button>
    </div>
  );
};

export default HomeScreen;
