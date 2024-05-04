import {
  KClientCard,
  KContainer,
  KHeader,
  KNavbar,
  KPageTitle,
} from "../../components";
import { useBackend } from "../../hooks";
import { useEffect, useState } from "react";

const ClientsScreen = () => {
  const { client } = useBackend();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const dbClients = await client.all();
      setClients(
        dbClients.reverse().map((dbClient) => {
          return {
            name: `${dbClient.first_name} ${dbClient.last_name}`,
            isActive: dbClient.is_active,
            createdAt: dbClient.created_at,
          };
        }),
      );
    };
    getClients();
  }, []);

  return (
    <KContainer>
      <KHeader>
        <KNavbar />
        <KPageTitle />
      </KHeader>
      <div className="flex flex-col px-24 py-16">
        <ul className="space-y-5">
          {clients.map((client) => (
            <li>
              <KClientCard
                name={client.name}
                status={client.isActive ? "Active" : "Inactive"}
                creationDate={client.createdAt}
              />
            </li>
          ))}
        </ul>
      </div>
    </KContainer>
  );
};

export default ClientsScreen;
