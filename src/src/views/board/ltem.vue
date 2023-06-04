<template>
	<div v-if="board">
		<!--board가 null이 아닐때만 실행-->
		<div class="title">{{ board.title }}</div>
		<div class="writer">{{ board.writer }}</div>
		<div class="view-count">{{ board.viewCount }}</div>
		<div class="body" v-html="nl2br(board.body)"></div>

		<div>
			<button @click="moveModify()">수정</button>
			<button @click="remove">삭제</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ItemView',
	data() {
		return {
			board: null,
		};
	},
	mounted() {
		this.$axios
			.post('/api/board/item', {
				boardNo: this.$route.params.id,
			})
			.then((result) => {
				if (result.data.result == 'ok') {
					this.board = result.data.item;
				}
			});
	},
	methods: {
		remove() {
			//code 가독성 높이는 방법!!
			if (!confirm('게시물을 삭제하시겠습니까?')) {
				//true
				return;
			}
			this.$axios.post('/api/board/remove', this.board).then((result) => {
				if (result.data.result == 'ok') {
					this.$router.go(-1); //삭제하며 전 목록으로 돌아감.
				}
			});
		},
		nl2br(input) {
			if (input) {
				return input.replace(/\n/g, '<br/>');
			}
		},
		moveModify() {
			//현재 게시물의 번호를 수정할거니까.
			this.$router.push('/board/modify/' + this.board.boardNo);
		},
	},
};
</script>

<style></style>
