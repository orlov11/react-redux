export function thunk({ getState, dispatch }) {
	return function wrapDispatchToAddLogging(next) {
		return function dispatchAndLog(action) {
			if (typeof action === 'function') {
				action(dispatch, getState)
			} else {
				return next(action)
			}
		}
	}
}
