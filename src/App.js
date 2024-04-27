import { Navigation } from "./navigation";
import { VerifyAuthentication } from "./wrappers";

const App = () => {
  return (
    <VerifyAuthentication>
      <Navigation />
    </VerifyAuthentication>
  );
};

export default App;
