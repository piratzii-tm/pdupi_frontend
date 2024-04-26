const main = "http://localhost:8000/";
const client = main + "client/";

export const api = {
  client: {
    register: client + "register",
    login: client + "login",
    byId: (id) => client + `?user_id=${id}`,
    all: "all",
    classes: (id) => client + `classes?client_id=${id}`,
    join: "join",
    exit: "exit",
    me: client,
  },
};
