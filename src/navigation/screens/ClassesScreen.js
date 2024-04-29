import {
  KCalendar,
  KContainer,
  KHeader,
  KNavbar,
  KPageTitle,
} from "../../components";

const ClassesScreen = () => {
  return (
    <KContainer>
      <KHeader>
        <KNavbar />
        <KPageTitle classes={true} />
      </KHeader>
      <div className={"p-20"}>
        <KCalendar />
      </div>
    </KContainer>
  );
};

export default ClassesScreen;
