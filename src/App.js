import Navigation from "./navigation/navigation";
import VerifyAuthentication from "./wrappers/VerifyAuthentication";
import { useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

const App = () => {
  return (
    <VerifyAuthentication>
      <Navigation />
    </VerifyAuthentication>
  );
};

export default App;
