import Navigation from "./navigation/navigation";
import VerifyAuthentication from "./wrappers/VerifyAuthentication";

const App = () => {
  return (
    <VerifyAuthentication>
      <Navigation />
    </VerifyAuthentication>
  );
};

export default App;
