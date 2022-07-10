import axios from "axios";

export const searchResult = async (keyword) => {
	const APP_ID = 'applicationId=1051466363713368918'
	const URL = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404'
	const SEARCH_URL = `${URL}?format=json&${APP_ID}`
	const params = {
		page: 1,
		title: keyword,
		hits: 20
	}
	const result = {
		data: [],
		message: ''
	}
	await axios.get(SEARCH_URL, {params})
	.then((res) => {
		if(res.data.Items.length) {
			result.data = res.data.Items
		} else {
			result.message = '該当するものはありません'
		}
	})
	.catch((err) => {
		console.error(err);
	})
	.finally(() => {
	})
	return result
}
