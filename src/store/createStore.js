export function createStore(reducer, initinalState) {
	let state = initinalState
	let listeners = []
	function getState() {
		return state
	}
	function dispatch(action) {
		state = reducer(state, action)
		for (let i = 0; i < listeners.length; i++) {
			const lister = listeners[i]
			lister()
		}
	}

	function subscribe(listner) {
		listeners.push(listner)
	}

	return { getState, dispatch, subscribe }
}
