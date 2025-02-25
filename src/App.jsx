import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    {id: uuidv4(), description: 'Completed task', completed: true, editing: false},
    {id: uuidv4(), description: 'Editing task', completed: false, editing: true},
    {id: uuidv4(), description: 'Active task', completed: false, editing: false},
  ])
	return (
		<section className='todoapp'>
			<NewTaskForm />
			<section className='main'>
				<TaskList todos={todos} />
				<Footer />
			</section>
		</section>
	)
}

export default App
