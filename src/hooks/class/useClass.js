import { api, header } from "../../constants/backend";

export const useClass = () => {
  const byId = async ({ class_id }) => {
    try {
      const response = await fetch(api.class.byId(class_id), {
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
      const response = await fetch(api.class.all, {
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

  const byDate = async ({ day, month }) => {
    try {
      const response = await fetch(api.class.byDate, {
        method: "POST",
        headers: header.json,
        body: {
          day,
          month,
        },
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
    byDate,
  };
};
