import Task from './Task'

const TaskList = ({ todos }) => {
	return (
		<ul className='todo-list'>
			{todos.map(task => (
				<Task
					key={task.id}
					description={task.description}
					completed={task.completed}
					editing={task.editing}
				/>
			))}
		</ul>
	)
}

export default TaskList
