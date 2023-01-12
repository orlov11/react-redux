import { createSlice } from '@reduxjs/toolkit'
import todoSevices from '../services/todoSevices'
import { setError } from './error'

const initialState = { entities: [], isLoading: true }

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		recived(state, action) {
			state.entities = action.payload
			state.isLoading = false
		},
		update(state, action) {
			const elementIndex = state.entities.findIndex(
				el => el.id === action.payload.id
			)
			state.entities[elementIndex] = {
				...state.entities[elementIndex],
				...action.payload
			}
		},
		remove(state, action) {
			state.entities = state.entities.filter(
				item => item.id !== action.payload.id
			)
		},
		taskRequested(state) {
			state.isLoading = true
		},
		taskRequestedFeiled(state, action) {
			state.isLoading = false
		},
		tasksCreate(state, action) {
			state.entities = [...state.entities, action.payload]
		}
	}
})

const { actions, reducer: taskReducer } = taskSlice
const {
	update,
	tasksCreate,
	remove,
	recived,
	taskRequestedFeiled,
	taskRequested
} = actions

export const loadTask = () => async dispatch => {
	dispatch(taskRequested())
	try {
		const data = await todoSevices.fetch()
		dispatch(recived(data))
	} catch (error) {
		dispatch(taskRequestedFeiled())
		dispatch(setError(error.message))
	}
}
export const copmpletedTask = id => (getState, dispatch) => {
	dispatch(
		update({
			id,
			completed: true
		})
	)
}

export const changeTitle = id => (getState, dispatch) => {
	dispatch(
		update({
			id,
			title: `New title  ${id}`
		})
	)
}

export function titleChange(id) {
	return update({
		id,
		title: `New title  ${id}`
	})
}

export const taskCreate = payload => async dispatch => {
	try {
		const data = await todoSevices.posts(payload)
		dispatch(tasksCreate(data))
	} catch (error) {
		dispatch(taskRequestedFeiled())
		dispatch(setError(error.message))
	}
}

export function taskDelet(id) {
	return remove({ id })
}

export const getTask = () => state => state.tasks.entities
export const getTaskIsLoading = () => state => state.tasks.isLoading

export default taskReducer
