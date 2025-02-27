import { useState } from 'react';

function NewTaskForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      setValue('');
      addTodo(value);
    }
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </header>
  );
}

export default NewTaskForm;
