import { useEffect, useState } from "react";
import { useBackend } from "../../hooks";

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);
  const { client } = useBackend();

  // !Do not change the dependency, even if a warning appears in the console.
  useEffect(() => {
    client.me().then((response) => setUserData(response));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {!userData ? (
        <div>
          <h1>Loading...</h1>
          <button onClick={client.logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Hello, {userData.first_name}</h2>
        </div>
      )}
      <button onClick={client.logout}>Logout</button>
    </div>
  );
};

export default HomeScreen;
