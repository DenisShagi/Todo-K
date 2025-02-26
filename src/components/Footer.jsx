import TasksFilter from "./TasksFilter";

const Footer = ({ clearAll, showLength }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{showLength()}</span>
      <TasksFilter />
      <button className="clear-completed" onClick={() => clearAll()}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
