import {
  KClientClassCard,
  KPageTitle,
  KNavbar,
  KHeader,
  KContainer,
} from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../assets";
import { useBackend } from "../../hooks";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserTypes } from "../../constants/models";
import React from "react";

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
    <KContainer>
      <KHeader>
        <KNavbar />
        <KPageTitle trainer={true} />
      </KHeader>

      <div
        className={
          "flex flex-row overflow-clip flex-wrap w-full min-h-screen p-5 gap-6"
        }
      >
        {trainers.map((trainer, index) => (
          <KClientClassCard
            image={trainer.image}
            nume={trainer.lastName}
            prenume={trainer.firstName}
          />
        ))}
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
    </KContainer>
  );
};

export default TrainersScreen;
