<template>
<div class="col-3 mb-3" v-for="(result, index) in results" :key="index">
  <div class="card img-thumbnail booklist h-100">
	<img :src="result.Item.largeImageUrl" :alt="result.Item.title" />
	<div class="card-body text-center px-2 py-3">
      <h5 class="font-weight-bold">{{ result.Item.title }}</h5>
	</div>
	<router-link :to="{name: 'detail', params: {id: index}}">
      詳細をみる
    </router-link>
  </div>
</div>
</template>

<script>
export default {
	name: 'BookCard',
    props: [
		'results'
	],
}
</script>

<style>

</style>