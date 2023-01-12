import { configureStore, combineReducers } from '@reduxjs/toolkit'
import errorReducer from './error'
import { logger } from './middelware/logger'

import taskReducer from './task'

const rootReducer = combineReducers({
	errors: errorReducer,
	tasks: taskReducer
})

export function createStore() {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
		devTools: process.env.NODE_ENV !== 'production'
	})
}

export default createStore
