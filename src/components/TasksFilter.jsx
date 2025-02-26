const TasksFilter = ({ filtersTodo, currentFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button
          className={currentFilter === "All" ? "selected" : ""}
          onClick={() => filtersTodo("All")}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={currentFilter === "Active" ? "selected" : ""}
          onClick={() => filtersTodo("Active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={currentFilter === "Completed" ? "selected" : ""}
          onClick={() => filtersTodo("Completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
