import httpService from './httpService'
const todoEndPoint = 'todos/'

const todoSevices = {
	fetch: async () => {
		const { data } = await httpService.get(todoEndPoint, {
			params: {
				_page: 1,
				_limit: 5
			}
		})
		return data
	},
	posts: async payload => {
		const { data } = await httpService.post(todoEndPoint, payload)
		return data
	}
}

export default todoSevices
