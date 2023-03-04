import TodoList from "./TodoList";
import {
  todo_all,
  todo_delete,
  todo_reverse,
  todo_clearCompleted,
} from "./config/server";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const Home = () => {
  const { data: todos, isPending, Error } = useFetch(todo_all(), "GET");
  const [pending, setPending] = useState(false);
  const [todo, setTodo] = useState();
  useEffect(() => {
    setTodo(todos);
  }, [isPending]);

  useEffect(() => {
    fetchAll();
  }, [pending]);

  const fetchAll = () => {
    fetch(todo_all(), {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setTodo(data);
      });
  };

  const rmTodo = (id) => {
    setPending(true);
    fetch(todo_delete(id), {
      method: "DELETE",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(id),
    }).then(() => {
      setPending(false);
    });
  };
  const checkedTodo = (id, isDone) => {
    setPending(true);
    fetch(todo_reverse(id), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(isDone),
    }).then(() => {
      setPending(false);
    });
  };
  const rmAllDone = () => {
    setPending(true);
    fetch(todo_clearCompleted(), {
      method: "GET",
    }).then((res) => {
      if (!res.ok) {
        throw Error("could not fetch data for that resource");
      }
      setPending(false);
      return res.json();
    });
  };

  return (
    <div className="home">
      {todo && (
        <TodoList
          todos={todo}
          rmTodo={rmTodo}
          checkedTodo={checkedTodo}
          rmAllDone={rmAllDone}
          title="All todos"
        />
      )}
      {Error && <div>{Error}</div>}
      {(isPending || pending) && <div>Loading...</div>}
    </div>
  );
};

export default Home;
