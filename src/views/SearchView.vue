<template>
  <div>
    Search
	<input v-model="keyword" type="text">
    <button @click="getData">検索</button>
  </div>
  <div class="text-center my-5" v-if="hasResult">
    <div class="mb-5">
      <h3>「{{ keyword }}」の検索結果</h3>
    </div>
    <div class="row">
      <BookCard :results="results" />
    </div>
  </div>
  <p v-else>{{ message }}</p>
</template>

<script>
import axios from "axios";
import BookCard from "@/components/BookCard.vue";

export default {
	name: 'SearchView',
	components: {
		BookCard
	},
	data() {
		return {
			message: '',
			keyword: '',
			results: this.$store.getters.getAll
		}
	},
	computed: {
		hasResult() {
			return this.results.length;
		},
	},
	methods: {
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
				if(res.data.Items.length) {
					this.results = res.data.Items
					this.$store.commit('save', res.data.Items);
				} else {
					this.message = '該当するものはありません'
				}
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