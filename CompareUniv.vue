<template>
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
							<td v-for="(items, index) in compareList" :key="index">{{ items }}</td>
						</tr>
						<tr>
							<td style="padding: 30px">전체 인원</td>
						</tr>
						<tr>
							<td style="padding: 30px">지역</td>
						</tr>
						<tr>
							<td style="padding: 30px">홈페이지</td>
						</tr>
						<tr>
							<td style="padding: 30px">취업률</td>
						</tr>
						<tr>
							<td style="padding: 30px">남녀성비</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'compareuniv',
	data() {
		return {
			List: [],
			Info: [],
		};
	},
	methods: {
		fetchData() {
			axios
				.get(
					`ttps://api.odcloud.kr/api/15014632/v1/uddi:d6552229-9686-4565-a421-ab303156f076_202004101338?page=1&perPage=10&serviceKey=hMojIvvHF%2B09wM6EWKKRIKhgicN%2FZohDT9YErSSMrpz76XeTM0XzQZi7x6L2bE1qa%2Bw24QV232F0GrcA2aSiZQ%3D%3D`,
				)
				.then((response) => {
					console.log(response);
					this.Info = response.data.currentCount.data;
				})
				.catch((error) => {
					console.error(error);
				});
		},
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
</style>
