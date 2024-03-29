import { GET_LOGS, ADD_LOG, DELETE_LOG, SET_LOADING, LOGS_ERROR, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from './types'

export const getLogs = () => async (dispatch) => {
	try {
		setLoading()
		const res = await fetch('/logs')
		const data = await res.json()
		dispatch({
			type: GET_LOGS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error.response.statusText
		})
	}
}

export const addLog = log => async (dispatch) => {
	try {
		setLoading()
		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await res.json()

		dispatch({
			type: ADD_LOG,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error.response.statusText
		})
	}
}

export const deleteLog = id => async (dispatch) => {
	try {
		setLoading()
		await fetch(`/logs/${id}`, {
			method: 'delete'
		})

		dispatch({
			type: DELETE_LOG,
			payload: id
		})
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error.response.statusText
		})
	}
}

export const updateLog = log => async (dispatch) => {
	try {
		setLoading()
		await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		dispatch({
			type: UPDATE_LOG,
			payload: log
		})
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error.response.statusText
		})
	}
}

export const searchLogs = text => async (dispatch) => {
	try {
		setLoading()
		const res = await fetch(`/logs?q=${text}`)
		const data = await res.json()
		dispatch({
			type: SEARCH_LOGS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error.response.statusText
		})
	}
}

export const setCurrent = log => ({ type: SET_CURRENT, payload: log })

export const clearCurrent = () => ({ type: CLEAR_CURRENT })

export const setLoading = () => ({ type: SET_LOADING })