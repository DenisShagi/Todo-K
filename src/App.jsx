import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';

import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      description: 'Completed task',
      completed: true,
      editing: false,
      created: distanceInWordsToNow(new Date(2025, 2, 0, 0, 0, 10), { addSuffix: true }),
      timer: 12,
      isRunning: false,
    },
    {
      id: uuidv4(),
      description: 'Active task',
      completed: false,
      editing: false,
      created: distanceInWordsToNow(new Date(2025, 2, 0, -10, 0, 1), { addSuffix: true }),
      timer: 100,
      isRunning: false,
    },
  ]);
  const [filterTodo, setFilterTodo] = useState('All');

  // Глобальный интервал для обновления таймеров всех активных задач
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.isRunning && todo.timer > 0) {
            return { ...todo, timer: todo.timer - 1 };
          }
          return todo;
        })
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const addTodo = (description, totalSeconds) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        description,
        completed: false,
        editing: false,
        created: distanceInWordsToNow(new Date()),
        timer: totalSeconds,
        isRunning: false,
      },
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };
  const editMode = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, editing: !todo.editing } : todo)));
  };
  const updateTodo = (id, newDescription) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, description: newDescription } : todo)));
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
    if (filterTodo === 'Active') {
      return todos.filter((todo) => !todo.completed);
    }
    if (filterTodo === 'Completed') {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  const startTimer = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, isRunning: true } : todo)));
  };

  // Функция stopTimer:
  const stopTimer = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, isRunning: false } : todo)));
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
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
        <Footer showLength={showLength} clearAll={clearAll} filtersTodo={filtersTodo} currentFilter={filterTodo} />
      </section>
    </section>
  );
}

export default App;
