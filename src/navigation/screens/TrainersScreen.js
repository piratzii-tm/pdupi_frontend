import {
  KClientClassCard,
  KPageTitle,
  KNavbar,
  KHeader,
  KContainer,
  KPlusButton,
  KTrainerModal,
} from "../../components";
import { useBackend } from "../../hooks";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserTypes } from "../../constants/models";
import React from "react";

const TrainersScreen = () => {
  const { trainer, admin } = useBackend();

  const [trainers, setTrainers] = useState([]);
  const [userType, setUserType] = useState(null);

  const [isTrainersModalOpen, setIsTrainersModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isTrainersModalOpen ? "hidden" : "scroll";
    if (isTrainersModalOpen) {
      window.scrollTo(0, 0);
    }
  }, [isTrainersModalOpen]);

  useEffect(() => {
    setTrainers([]);
    trainer.all().then((response) => {
      response.forEach((trainer) => {
        const newTrainer = {
          image: `https://source.unsplash.com/random/500x500?sig=${response.indexOf(trainer)}`,
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

      <div className={"flex flex-row overflow-clip flex-wrap w-full"}>
        {trainers.map((trainer, index) => (
          <KClientClassCard
            image={trainer.image}
            nume={trainer.lastName}
            prenume={trainer.firstName}
          />
        ))}
        {userType === UserTypes.admin && (
          <KPlusButton onClick={() => setIsTrainersModalOpen(true)} />
        )}
      </div>

      {isTrainersModalOpen && (
        <div
          className={"h-full w-full bg-black opacity-70 absolute top-0"}
        ></div>
      )}
      {isTrainersModalOpen && (
        <KTrainerModal
          setIsOpen={setIsTrainersModalOpen}
          onSave={(firstName, lastName) => {
            admin.addTrainer({ first_name: firstName, last_name: lastName });
            setIsTrainersModalOpen(false);
          }}
        />
      )}
    </KContainer>
  );
};

export default TrainersScreen;
