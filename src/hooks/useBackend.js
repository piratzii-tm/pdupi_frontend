import { useClient } from "./client/useClient";

export const useBackend = () => {
  const client = useClient();

  return {
    client,
  };
};
