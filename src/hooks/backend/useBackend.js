import { useClient } from "./client/useClient";
import { useAdmin } from "./admin/useAdmin";
import { useTrainer } from "./trainer/useTrainer";
import { useClass } from "./class/useClass";

export const useBackend = () => {
  return {
    client: useClient(),
    admin: useAdmin(),
    trainer: useTrainer(),
    class: useClass(),
  };
};
