<template>
  <div>
    Search
	<input v-model="keyword" type="text">
    <button @click="onClickSearch">検索</button>
  </div>
  <div class="text-center my-5" v-if="hasResult">
    <div class="mb-5">
      <h3>「{{ keyword }}」の検索結果</h3>
    </div>
    <div class="row">
      <BookCard :results="searchResult" />
    </div>
  </div>
  <p v-else>{{ message }}</p>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import { computed, ref } from 'vue';
import { useStore } from "vuex";
// import { searchResult } from '@/api/SearchResult'

export default {
	name: 'SearchView',
	components: {
		BookCard
	},
	setup() {
		const hasResult = ref(false)
		const keyword = ref('')
		const message = ref('')
		console.log('setup')

		const store = useStore();

		const searchResult = computed(() => {
			return store.state.SearchViewState.results.data
		})

		const onClickSearch = async () => {
			if(!keyword.value) return
			await store.dispatch('SearchViewState/getResults', keyword.value)
			hasResult.value = true
		}

		return {
			hasResult,
			keyword,
			message,
			onClickSearch,
			searchResult
		}
	},
}
</script>

<style>

</style>