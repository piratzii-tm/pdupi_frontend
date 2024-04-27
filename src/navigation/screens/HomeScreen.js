import { useEffect, useState } from "react";
import { useBackend } from "../../hooks";

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);
  const { client } = useBackend();

  useEffect(() => {
    client.me().then((response) => setUserData(response));
  }, []);

  if (userData === null || userData === undefined) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Home</h1>
      <h2>Hello, {userData.first_name}</h2>
      <button onClick={client.logout}>Logout</button>
    </div>
  );
};

export default HomeScreen;
