import { useState, useRef } from 'react';

function NewTaskForm({ addTodo }) {
  const [value, setValue] = useState('');
  const [min, setMin] = useState();
  const [sec, setSec] = useState();

  const refTitle = useRef(null);
  const refMin = useRef(null);
  const refSec = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      refMin.current.focus();
      // const totalSeconds = Number(min) * 60 + Number(sec);
      // setValue('');
      // addTodo(value, totalSeconds);
    }
  };
  const handleMinPress = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      refSec.current.focus();
    }
  };
  const handleSecPress = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      const totalSeconds = Number(min) * 60 + Number(sec);
      setValue('');
      setMin('');
      setSec('');
      addTodo(value, totalSeconds);
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyPress}
          ref={refTitle}
        />
        <input
          ref={refMin}
          className="new-todo-form__timer"
          placeholder="Min"
          onChange={(e) => setMin(Number(e.target.value))}
          onKeyDown={handleMinPress}
        />
        <input
          ref={refSec}
          className="new-todo-form__timer"
          placeholder="Sec"
          onChange={(e) => setSec(Number(e.target.value))}
          onKeyDown={handleSecPress}
        />
      </form>
    </header>
  );
}

export default NewTaskForm;
