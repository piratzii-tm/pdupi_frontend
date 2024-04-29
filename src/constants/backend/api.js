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
    all: client + "all",
    classes: (id) => client + `classes?client_id=${id}`,
    join: client + "join",
    exit: client + "exit",
  },
  admin: {
    me: admin,
    login: admin + "login",
    addTrainer: admin + "add_trainer",
    addClass: admin + "add_class",
  },
  trainer: {
    byId: (id) => trainer + `?instructor_id=${id}`,
    all: trainer + "all",
  },
  class: {
    byId: (id) => classes + `?gym_id=${id}`,
    all: classes + "all",
    byDate: classes + "filtered",
    byMonth: (month) => classes + `month?month=${month}`,
  },
};
