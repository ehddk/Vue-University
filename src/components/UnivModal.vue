<template>
	<!----모달창 띄우기-->
	<section v-if="isOpenModal" class="modal">
		<div id="content" style="background: white">
			<div class="content_header" style="padding: 50px">
				<h2>대학 비교</h2>
			</div>
			<div class="univ_body" style="padding: 50px 0 0 100px">
				<div class="univ_content">
					<table class="univ_table">
						<colgroup>
							<col style="width: 200px" />
							<col style="width: 200px" />
							<col style="width: 200px" />
							<col style="width: 200px" />
						</colgroup>
						<thead style="background: lightgray">
							<tr>
								<th scope="col" style="padding: 20px">카테고리</th>
								<th scope="col">대학교명</th>
								<th scope="col">대학교명</th>
								<th scope="col">대학교명</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style="padding: 30px">지역</td>
							</tr>
							<tr>
								<td style="padding: 30px">전체 수</td>
							</tr>
							<tr>
								<td style="padding: 30px">학교 URL</td>
							</tr>
							<tr>
								<td style="padding: 30px">입학상황(성별)</td>
							</tr>
						</tbody>
					</table>
					<button class="close_btn" @click.stop="closeModal">닫기</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		isOpenModal: {
			type: Boolean,
			required: true,
		},
	},

	methods: {
		closeModal() {
			this.$emit('closeModal');
		},
		// close(event) {

		// 	if (event.target.classList.contains('modal')) {
		// 		this.$emit('closeModal');
		// 	}
		// },
	},
};
</script>

<style>
body {
	background: #f4f5f9;
}
.content_header {
	padding: 15px;
}
.univ_body {
	margin-top: 50px;
	height: auto;
}
.univ_table {
	border: 1px solid #ababab;
}
.univ_table th {
	border-bottom: 1px solid #ababab;
}
colgroup {
	display: table-column-group;
}
col {
	display: table-column;
}
.modal {
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.432);
	position: fixed;
	padding: 20px;
}
</style>
