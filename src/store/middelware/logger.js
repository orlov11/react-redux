export function logger(store) {
	return function wrapDispatchToAddLogging(next) {
		return function dispatchAndLog(action) {
			return next(action)
		}
	}
}
