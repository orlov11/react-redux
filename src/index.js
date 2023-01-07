import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { taskCopmpleted, titleChange, taskDelet } from './store/action'
import { initateStore } from './store/store'

const store = initateStore()
const App = () => {
	const [state, setState] = useState(store.getState())

	useEffect(() => {
		store.subscribe(() => {
			setState(store.getState())
		})
	}, [])

	const completeTask = id => {
		store.dispatch(taskCopmpleted(id))
	}
	const chageTitle = id => {
		store.dispatch(titleChange(id))
	}

	const deleteTask = id => {
		store.dispatch(taskDelet(id))
	}
	return (
		<>
			<h1>App</h1>
			<ul>
				{state.map(item => (
					<li key={item.id}>
						<p>{item.title}</p>
						<p>{`Complleted: ${item.completed}`}</p>
						<button onClick={() => completeTask(item.id)}>
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
			</ul>
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
