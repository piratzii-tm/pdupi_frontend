import { useEffect, useState } from "react";
import { fetchUserData } from "../../constants/helpers/fetchCurrentUser";
import { useAuthentication } from "../../hooks/useAuthentication";

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);
  const { handleLogout } = useAuthentication();

  useEffect(() => {
    fetchUserData().then((response) => setUserData(response));
  }, []);

  if (userData === null) {
    return <div></div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <h2>Hello, {userData.first_name}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomeScreen;
