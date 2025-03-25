function Task({
  id,
  description,
  completed,
  editing,
  created,
  toggleTodo,
  editMode,
  updateTodo,
  removeTodo,
  timer,
  startTimer,
  stopTimer,
}) {
  const handleChange = (e) => {
    updateTodo(id, e.target.value);
  };
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      editMode(id);
    }
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <li className={`${completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={() => toggleTodo(id)} checked={completed} />
        <label>
          <span className="description">
            {description}
            <button className="icon icon-play" onClick={() => startTimer(id)} />
            <button className="icon icon-pause" onClick={() => stopTimer(id)} />
            {formatTime(timer)}
          </span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit" onClick={() => editMode(id)} />
        <button className="icon icon-destroy" onClick={() => removeTodo(id)} />
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
}

export default Task;
