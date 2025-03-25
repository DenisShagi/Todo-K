import Task from './Task';

function TaskList({ todos, toggleTodo, editMode, updateTodo, removeTodo, startTimer, stopTimer }) {
  return (
    <ul className="todo-list">
      {todos.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          completed={task.completed}
          editing={task.editing}
          created={task.created}
          timer={task.timer}
          toggleTodo={() => toggleTodo(task.id)}
          editMode={() => editMode(task.id)}
          updateTodo={(description) => updateTodo(task.id, description)}
          removeTodo={() => removeTodo(task.id)}
          startTimer={() => startTimer(task.id)}
          stopTimer={() => stopTimer(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
