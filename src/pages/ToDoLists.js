import React, { useState } from "react";

export const ToDoLists = () => {
  const cleanTask = { name: "" };
  const [task, setTask] = useState(cleanTask);

  const [doneList, setDoneList] = useState([]);
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name) {
      const t = {
        id: "" + (todoList.length + doneList.length + 1),
        name: task.name,
      };
      setTodoList([...todoList, t]);
    }

    setTask(cleanTask);
  };

  const handleFieldChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const doneTask = (e) => {
    const newTodoList = todoList.filter((t) => t.id !== e.target.value);
    const doneTask = todoList.find((t) => t.id === e.target.value);

    setTodoList(newTodoList);

    setDoneList([...doneList, doneTask]);
  };

  const undoneTask = (e) => {
    const newDoneList = doneList.filter((t) => t.id !== e.target.value);
    const todoTask = doneList.find((t) => t.id === e.target.value);

    setDoneList(newDoneList);
    setTodoList([...todoList, todoTask]);
  };

  return (
    <div>
      <h2>Add a New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Task
          <input
            type="text"
            placeholder="Enter Task"
            name="name"
            value={task.name}
            onChange={handleFieldChange}
          />
        </div>
        <div>
          <button type="submit">Add to todo list</button>
        </div>
      </form>
      <br />
      <br />

      <h3>Todo list</h3>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>
                <button onClick={doneTask} value={t.id}>
                  Move to done
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <br />
      <h3>Done list</h3>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {doneList.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>
                <button onClick={undoneTask} value={t.id}>
                  Move to todo
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
