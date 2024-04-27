import { useClient } from "./client/useClient";
import { useAdmin } from "./admin/useAdmin";
import { useTrainer } from "./trainer/useTrainer";

export const useBackend = () => {
  return {
    client: useClient(),
    admin: useAdmin(),
    trainer: useTrainer(),
  };
};
