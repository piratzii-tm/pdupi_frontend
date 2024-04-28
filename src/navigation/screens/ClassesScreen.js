import { KContainer, KHeader, KNavbar, KPageTitle } from "../../components";

const ClassesScreen = () => {
  return (
    <KContainer>
      <KHeader>
        <KNavbar />
        <KPageTitle classes={true} />
      </KHeader>
    </KContainer>
  );
};

export default ClassesScreen;
