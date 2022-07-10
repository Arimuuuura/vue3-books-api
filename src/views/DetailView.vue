<template>
	<div class="my-5">
		<div class="row">
			<div class="col-md-6 text-center">
				<img :src="detail.largeImageUrl" class="img-fluid">
			</div>
			<div class="col-md-6">
				<div class="card">
					<div class="card-body px-2 py-1">
						<div class="p-4">
							<h3>{{ detail.title }}</h3>
							<p class="mb-3">{{ detail.author }}</p>
							<hr>
							<div class="d-flex flex-row" v-if="detail.reviewCount !== 0">
								<div class="star-rating">
									<div class="star-rating-front text-warning" style="width: {{ detail.average }}%"></div>
									<div class="star-rating-back">⭐️⭐️⭐️⭐️⭐️</div>
								</div>
								<div class="average ml-2 text-danger">
									{{ detail.reviewAverage }}
								</div>
								<div class="d-flex align-items-center ml-2">
									{{ detail.reviewCount }}件
								</div>
							</div>
							<p v-else>レビューはありません</p>
							<p class="mt-3">価格：<span class="text-danger font-weight-bold h3">{{ detail.itemPrice }}円</span></p>
							<a :href="detail.itemUrl" class="btn btn-primary">楽天で購入する</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mb-5" v-if="detail.itemCaption">
			<h5>商品説明</h5>
			<hr>
			<p>{{ detail.itemCaption }}</p>
		</div>
		<div class="mb-5">
			<h5>商品情報</h5>
			<hr>
			<p>発売日：{{ detail.salesDate }}</p>
			<p>著者/編集：{{ detail.author }}</p>
			<p>出版社：{{ detail.publisherName }}</p>
			<p>発行形態：{{ detail.size }}</p>
			<p>ISBNコード：{{ detail.isbn }}</p>
		</div>
	</div>
	<button @click="back">戻る</button>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
	name: 'SearchView',
	setup() {
		const store = useStore();
		const route = useRoute()
		const router = useRouter()

		const index = parseInt(route.params.id)
		const detail = computed(() => {
			return store.state.SearchViewState.results.data[index].Item
		})

		const back = () => {
			router.push('/search');
		}

		return {
			detail,
			back
		}
	}
}
</script>

<style>

</style>