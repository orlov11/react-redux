import { taskUpdated, taskDeleted } from './actionTypes'

export function taskCopmpleted(id) {
	return {
		type: taskUpdated,
		payload: {
			id,
			completed: true
		}
	}
}
export function titleChange(id) {
	return {
		type: taskUpdated,
		payload: {
			id,
			title: `New title for ${id}`
		}
	}
}

export function taskDelet(id) {
	return {
		type: taskDeleted,
		payload: {
			id
		}
	}
}
