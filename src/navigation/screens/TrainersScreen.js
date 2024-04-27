import { KClientClassCard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets";
import { useBackend } from "../../hooks";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserTypes } from "../../constants/models/userTypes";

const TrainersScreen = () => {
  const { trainer } = useBackend();

  const [trainers, setTrainers] = useState([]);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    setTrainers([]);
    trainer.all().then((response) => {
      response.forEach((trainer) => {
        const newTrainer = {
          image: images.default,
          firstName: trainer.first_name,
          lastName: trainer.last_name,
        };
        setTrainers((prevState) => [...prevState, newTrainer]);
      });
    });
  }, []);

  useEffect(() => {
    const getUserType = async () => await Cookies.get("user");
    getUserType().then((type) => setUserType(type));
  }, []);

  return (
    <div
      className={
        "flex flex-row overflow-clip flex-wrap w-full min-h-screen p-16 bg-tuatara gap-6"
      }
    >
      {trainers.map((trainer, index) => (
        <KClientClassCard
          image={trainer.image}
          nume={trainer.lastName}
          prenume={trainer.firstName}
        />
      ))}
      {/*TODO Make this apear only if is an admin*/}
      {/*TODO: Implement plus button logic*/}
      {userType === UserTypes.admin && (
        <button
          className={
            "flex absolute bottom-0 right-0 p-10 m-10 rounded-full bg-barberry"
          }
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      )}
    </div>
  );
};

export default TrainersScreen;
