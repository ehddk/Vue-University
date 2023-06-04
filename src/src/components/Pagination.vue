<template>
	<div style="text-align: center">
		<span>
			<button v-if="data.isPrev" @click="movePage(data.startNav - 1)">
				<img src="./prev.png" style="width: 10px; height: 10px" />
			</button>
		</span>
		<button v-for="(page, key) in pageList" :key="key" @click="movePage(page)">{{ page }}</button>
		<button v-if="data.isNext" @click="movePage(data.endNav + 1)">
			<img src="./next.png" style="width: 10px; height: 10px" />
		</button>
	</div>
</template>

<script>
export default {
	props: ['data'],
	data() {
		return {
			pageList: [],
		};
	},
	watch: {
		data() {
			this.init();
		},
	},
	mounted() {
		this.init();
	},

	methods: {
		init() {
			if (this.data) {
				this.pageList = [];
				for (var i = this.data.startNav; i <= this.data.endNav; i++) {
					this.pageList.push(i);
				}
			}
		},
	},
};
</script>

<style></style>
