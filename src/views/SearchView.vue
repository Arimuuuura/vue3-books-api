<template>
  <div>
    Search
	<input v-model="keyword" type="text">
    <button @click="getData">検索</button>
  </div>
  <div v-if="hasResult">
    <ul>
		<li v-for="result in results" :key="result.index">
		{{ result.Item.title }}
		{{ result.Item.subTitle }}
		{{ result.Item.author }}
		{{ result.Item.salesDate }}
		<img :src="result.Item.largeImageUrl" :alt="result.Item.title" />
		</li>
	</ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
	name: 'SearchView',
	data() {
		return {
			keyword: '',
			results: []
		}
	},
	methods: {
		hasResult() {
			return this.results.length;
		},
		getData() {
			if(!this.keyword) return

			const APP_ID = 'applicationId=1051466363713368918'
			const URL = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404'
			const SEARCH_URL = `${URL}?format=json&${APP_ID}`
			const params = {
				page: 1,
				title: this.keyword,
				hits: 20
			}
			axios.get(SEARCH_URL, {params})
			.then((res) => {
				this.results = res.data.Items
				console.log(this.results);
			})
			.catch((err) => {
				console.error(err);
			})
			.finally(() => {})
		}
	}
}
</script>

<style>

</style>