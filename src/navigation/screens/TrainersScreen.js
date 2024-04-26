import KClientClassCard from "../../components/KClientClassCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TrainersScreen = () => {
  const trainers = [
    {
      image: require("../../assets/images/devegion.png"),
      nume: "Nume",
      prenume: "Prenume",
    },
    {
      image: require("../../assets/images/devegion.png"),
      nume: "Nume1",
      prenume: "Prenume1",
    },
    {
      image: require("../../assets/images/devegion.png"),
      nume: "Nume2",
      prenume: "Prenume2",
    },
    {
      image: require("../../assets/images/devegion.png"),
      nume: "Num3",
      prenume: "Prenum3",
    },
    {
      image: require("../../assets/images/devegion.png"),
      nume: "Nume4",
      prenume: "Prenume4",
    },
  ];
  return (
    <div
      className={
        "flex flex-row overflow-clip flex-wrap w-full min-h-screen p-16 bg-tuatara gap-6"
      }
    >
      {trainers.map((trainer, index) => (
        <KClientClassCard
          image={trainer.image}
          nume={trainer.nume}
          prenume={trainer.prenume}
        />
      ))}
      {/*TODO Make this apear only if is an admin*/}
      {/*TODO: Implement plus button logic*/}
      <button
        className={
          "flex absolute bottom-0 right-0 p-10 m-10 rounded-full bg-barberry"
        }
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default TrainersScreen;
