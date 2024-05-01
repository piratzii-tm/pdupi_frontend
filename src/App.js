import { Navigation } from "./navigation";
import { VerifyAuthentication } from "./wrappers";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "./constants/theming";

const App = () => {
  return (
    <VerifyAuthentication>
      <ThemeProvider theme={muiTheme}>
        <Navigation />
      </ThemeProvider>
    </VerifyAuthentication>
  );
};

export default App;
