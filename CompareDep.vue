<template>
	<div id="content" style="background: white">
		<div class="content_header" style="padding: 50px">
			<h2>학과 비교</h2>
		</div>

		<div class="univ_body" style="padding: 50px 0 0 100px">
			<div class="univ_content">
				<ul class="tabs">
					<li class="tot_tb" :class="{ active: activeTab === 'tot_tb' }" @click="activeTab = 'tot_tb'">전체비교</li>
					<li class="plan_tb" :class="{ active: activeTab === 'plan_tb' }" @click="activeTab = 'plan_tb'">강의계획서</li>
				</ul>
			</div>
			<!--전체비교 탭-->
			<table class="univ_table" v-if="activeTab === 'tot_tb'">
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

			<!--강의계획서 탭-->
			<table class="univ_table" v-if="activeTab === 'plan_tb'">
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
						<th scope="col">대교명</th>
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
</template>

<script>
export default {
	name: 'comparedepart',
	data() {
		return {
			activeTab: 'tot_tb', //초기 선택 탭
		};
	},
};
</script>

<style>
.tabs {
	height: 32px;
	padding: 0;
	margin-top: 10px;
	/* border-bottom: 1px solid navy; */
}
.tot_tb,
.plan_tb {
	float: left;
	padding: 5px 50px 5px;
	letter-spacing: -1px;
	border-top: 1px solid #008394;
	border-right: 1px solid #008394;
	border-left: 1px solid #00bed7;
	background: rgb(211, 222, 228);
}
.tot_tb.active,
.plan_tb.active {
	background: #ffc832;
}
.plan_tb {
	float: left;
	padding: 5px 50px 5px;
	letter-spacing: -1px;
}
</style>
