const main = "http://localhost:8000/";
const client = main + "client/";
const admin = main + "admin/";
const classes = main + "gym_class/";
const trainer = main + "trainer/";

export const api = {
  client: {
    me: client,
    register: client + "register",
    login: client + "login",
    byId: (id) => client + `?user_id=${id}`,
    all: "all",
    classes: (id) => client + `classes?client_id=${id}`,
    join: "join",
    exit: "exit",
  },
  admin: {
    me: admin,
    login: admin + "login",
    addTrainer: admin + "add_trainer",
    addClass: admin + "add_class",
  },
};
