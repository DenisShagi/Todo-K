import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

function App() {
	const [todos, setTodos] = useState([
		{
			id: uuidv4(),
			description: 'Completed task',
			completed: true,
			editing: false,
		},
		{
			id: uuidv4(),
			description: 'Editing task',
			completed: false,
			editing: true,
		},
		{
			id: uuidv4(),
			description: 'Active task',
			completed: false,
			editing: false,
		},
	])

	const addTodo = description => {
		setTodos([
			...todos,
			{
				id: uuidv4(),
				description: description,
				completed: false,
				editing: false,
			},
		])
	}
	const toggleTodo = id => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}
	const editMode = id => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, editing: !todo.editing } : todo
			)
		)
	}
	return (
		<section className='todoapp'>
			<NewTaskForm addTodo={addTodo} />
			<section className='main'>
				<TaskList todos={todos} toggleTodo={toggleTodo} editMode={editMode} />
				<Footer />
			</section>
		</section>
	)
}

export default App
