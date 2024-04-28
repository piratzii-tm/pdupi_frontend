import { KContainer, KHeader, KNavbar, KPageTitle } from "../../components";

const ClientsScreen = () => {
  return (
    <KContainer>
      <KHeader>
        <KNavbar />
        <KPageTitle client={true} />
      </KHeader>
    </KContainer>
  );
};

export default ClientsScreen;
