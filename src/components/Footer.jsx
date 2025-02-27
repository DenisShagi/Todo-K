import TasksFilter from './TasksFilter';

function Footer({ clearAll, showLength, filtersTodo, currentFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{showLength()}</span>
      <TasksFilter filtersTodo={filtersTodo} currentFilter={currentFilter} />
      <button className="clear-completed" onClick={() => clearAll()}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
