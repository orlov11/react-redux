import { createStore } from 'redux'
import { taskReducer } from './taskReducer'

const initinalState = [
	{ id: 1, title: 'Task 1 ', completed: false },
	{ id: 2, title: 'Task 2 ', completed: false }
]

export function initateStore() {
	return createStore(taskReducer, initinalState)
}
