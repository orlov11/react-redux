import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
	titleChange,
	taskDelet,
	copmpletedTask,
	getTask,
	loadTask,
	getTaskIsLoading,
	taskCreate
} from './store/task'
import configureStore from './store/store'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { getError } from './store/error'

const store = configureStore()

const App = () => {
	const state = useSelector(getTask())
	const dispatch = useDispatch()
	const isLoading = useSelector(getTaskIsLoading())
	const error = useSelector(getError())

	useEffect(() => {
		dispatch(loadTask())
	}, [])

	const chageTitle = id => {
		dispatch(titleChange(id))
	}

	const deleteTask = id => {
		dispatch(taskDelet(id))
	}
	const createTask = () => {
		const titleTask = prompt(`Введите название новой задачи:`)
		dispatch(taskCreate({ title: titleTask, completed: true }))
	}

	if (isLoading) {
		return <h1>Loading...</h1>
	}
	if (error) {
		return <h2>{error}, sorry :(</h2>
	}
	return (
		<>
			<h1>App</h1>
			<ul>
				{state.map(item => (
					<li key={item.id}>
						<p>{item.title}</p>
						<p>{`Complleted: ${item.completed}`}</p>
						<button onClick={() => dispatch(copmpletedTask(item.id))}>
							Complete
						</button>
						<button onClick={() => chageTitle(item.id)}>
							Chage title
						</button>
						<button onClick={() => deleteTask(item.id)}>
							Delete task
						</button>
						<hr />
					</li>
				))}
				<button onClick={createTask}>Create task</button>
			</ul>
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
