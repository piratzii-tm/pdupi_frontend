import { api, header } from "../../../constants/backend";

export const useTrainer = () => {
  const byId = async ({ instructor_id }) => {
    try {
      const response = await fetch(api.trainer.byId(instructor_id), {
        method: "GET",
        headers: header.json,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const all = async () => {
    try {
      const response = await fetch(api.trainer.all, {
        method: "GET",
        headers: header.json,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    byId,
    all,
  };
};
