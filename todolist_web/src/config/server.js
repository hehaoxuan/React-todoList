export const server = process.env.BASE_URL
  ? "http://139.155.91.186:3001/"
  : "http://localhost:3001";

export const todo_all = () => {
  return `${server}`;
};

export const todo_detail = (id) => {
  return `${server}/${id}`;
};

export const todo_create = () => `${server}/create`;

export const todo_delete = (id) => {
  return `${server}/${id}`;
};

export const todo_reverse = (id) => {
  return `${server}/${id}`;
};

export const todo_clearCompleted = () => `${server}/clear`;
