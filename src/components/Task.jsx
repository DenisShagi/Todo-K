import { useState, useRef, useEffect } from 'react';

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
  timer: initialTimer,
}) {
  const [timer, setTimer] = useState(initialTimer);
  const timerId = useRef();

  const handleChange = (e) => {
    updateTodo(e.target.value);
  };
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      editMode(id);
    }
  };
  const handleStart = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : prev));
      }, 1000);
    }
  };
  const handleStop = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, []);
  return (
    <li className={`${completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={toggleTodo} checked={completed} />
        <label>
          <span className="description">
            {description}
            <button className="icon icon-play" onClick={handleStart} />
            <button className="icon icon-pause" onClick={handleStop} />
            {formatTime(timer)}
          </span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit" onClick={() => editMode(id)} />
        <button className="icon icon-destroy" onClick={removeTodo} />
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
