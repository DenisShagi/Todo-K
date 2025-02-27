const Task = ({
  id,
  description,
  completed,
  editing,
  created,
  toggleTodo,
  editMode,
  updateTodo,
  removeTodo,
}) => {
  const handleChange = (e) => {
    updateTodo(e.target.value);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      editMode(id);
    }
  };

  return (
    <li
      className={`${completed ? "completed" : ""} ${editing ? "editing" : ""}`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={toggleTodo}
          checked={completed} // <-- Важно!
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{created}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => editMode(id)}
        ></button>
        <button className="icon icon-destroy" onClick={removeTodo }></button>
      </div>
      {editing && (
        <input
          type="text"
          className="edit"
          onKeyDown={handleKey}
          onChange={handleChange}
          value={description}
          autoFocus
        />
      )}
    </li>
  );
};

export default Task;
