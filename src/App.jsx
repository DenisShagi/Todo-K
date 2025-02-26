import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      description: "Completed task",
      completed: true,
      editing: false,
    },
    {
      id: uuidv4(),
      description: "Editing task",
      completed: false,
      editing: true,
    },
    {
      id: uuidv4(),
      description: "Active task",
      completed: false,
      editing: false,
    },
  ]);
  const [filterTodo, setFilterTodo] = useState("All");
  const addTodo = (description) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        description: description,
        completed: false,
        editing: false,
      },
    ]);
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const editMode = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editing: !todo.editing } : todo
      )
    );
  };
  const updateTodo = (id, newDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, description: newDescription } : todo
      )
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const clearAll = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };
  const showLength = () => {
    return `${todos.length} items left`;
  };
  const filtersTodo = (filter) => {
    setFilterTodo(filter);
  };

  const filteredTasks = () => {
    if (filterTodo === "Active") {
      return todos.filter((todo) => !todo.completed);
    } else if (filterTodo === "Completed") {
      return todos.filter((todo) => todo.completed);
    } else {
      return todos;
    }
  };
  return (
    <section className="todoapp">
      <NewTaskForm addTodo={addTodo} />
      <section className="main">
        <TaskList
          todos={filteredTasks()}
          toggleTodo={toggleTodo}
          editMode={editMode}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
        <Footer
          showLength={showLength}
          clearAll={clearAll}
          filtersTodo={filtersTodo}
          currentFilter={filterTodo}
        />
      </section>
    </section>
  );
}

export default App;
