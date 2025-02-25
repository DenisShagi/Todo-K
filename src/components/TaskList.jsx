import Task from './Task'

const TaskList = ({ todos, toggleTodo, editMode }) => {
	return (
		<ul className='todo-list'>
			{todos.map(task => (
				<Task
					key={task.id}
					description={task.description}
					completed={task.completed}
					editing={task.editing}
					toggleTodo={() => toggleTodo(task.id)}
					editMode={() => editMode(task.id)}
				/>
			))}
		</ul>
	)
}

export default TaskList
