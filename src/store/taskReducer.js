import { taskDeleted, taskUpdated } from './actionTypes'

export function taskReducer(state = [], action) {
	switch (action.type) {
		case taskUpdated: {
			const newArr = [...state]
			const elementIndex = newArr.findIndex(
				el => el.id === action.payload.id
			)
			newArr[elementIndex] = { ...newArr[elementIndex], ...action.payload }
			return newArr
		}
		case taskDeleted: {
			const newArr = [...state]

			return newArr.filter(item => item.id !== action.payload.id)
		}
		default:
			return state
	}
}
