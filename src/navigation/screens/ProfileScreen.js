import {
  KContainer,
  KHeader,
  KNavbar,
  KPageTitle,
  KTrainerCard,
} from "../../components";
import { useBackend } from "../../hooks";
import { useEffect, useState } from "react";

const ProfileScreen = () => {
  const { client, trainer } = useBackend();
  const [clientsClasses, setClientsClasses] = useState([]);

  useEffect(() => {
    const getClientsClasses = async () => {
      try {
        const { id } = await client.me();
        const dbClientsClasses = await client.classes({ client_id: id });

        setClientsClasses(
          await Promise.all(
            dbClientsClasses.map(async (dbClassClient) => {
              const { first_name, last_name } = await trainer.byId({
                instructor_id: dbClassClient.class.instructor_id,
              });
              return {
                trainer: `${first_name} ${last_name}`,
                className: dbClassClient.class.class_name,
                day: `${dbClassClient.day.day}/${dbClassClient.day.month}/2024`,
                start_hour: `${dbClassClient.day.starting_hour}:00`,
              };
            }),
          ),
        );
      } catch (error) {
        console.error("Error fetching clients classes:", error);
      }
    };

    getClientsClasses();
  }, []);

  return (
    <KContainer>
      <KHeader>
        <KNavbar />
        <KPageTitle title={"PROFILE"} />
      </KHeader>
      <div className="flex flex-col space-y-9 items-center px-24 py-16">
        <text className="font-koulen text-barberry text-6xl">My classes</text>
        <ul className="space-y-5 w-[100%]">
          {clientsClasses.map((client) => (
            <li>
              <KTrainerCard
                className={client.className}
                antrenor={client.trainer}
                data={client.day}
                ora={client.start_hour}
              />
            </li>
          ))}
        </ul>
      </div>
    </KContainer>
  );
};

export default ProfileScreen;
