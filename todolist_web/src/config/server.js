const currentUrl = window.location.href;
const checkUrl = !!(
  currentUrl.startsWith("http://localhost") ||
  currentUrl.startsWith("https://localhost") ||
  currentUrl.startsWith("http://127.0.0.1") ||
  currentUrl.startsWith("https://127.0.0.1")
);

export const server = checkUrl
  ? "http://localhost:3001"
  : "https://139.155.91.186:3001/";

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
