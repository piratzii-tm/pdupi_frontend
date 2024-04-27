import { useClient } from "./client/useClient";
import { useAdmin } from "./admin/useAdmin";

export const useBackend = () => {
  return {
    client: useClient(),
    admin: useAdmin(),
  };
};
