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
						<th scope="col">학과명</th>
						<th scope="col">학과명</th>
						<th scope="col">학과명</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="padding: 30px">구분</td>
						<td>
							<select id="emailsel">
								<option v-for="(res, index) in DepInfo" :key="index">{{ res }}</option>
								<!-- <option selected>직접입력</option>
								<option>naver.com</option>
								<option>gmail.com</option>
								<option>hanmail.net</option> -->
							</select>
						</td>
						<td>
							<select id="emailsel">
								<option v-for="(res, index) in DepInfo" :key="index">{{ res }}</option>
							</select>
						</td>
					</tr>
					<!-- <tr v-for="(res, index) in DepInfo" :key="index">
						<td>{{ res }}</td>
					</tr> -->
					<tr>
						<td style="padding: 30px">관련 자격</td>
						<td v-for="(res, index) in employ" :key="index">{{ res }}</td>
					</tr>
					<tr>
						<td style="padding: 30px">특성 성별</td>
					</tr>
					<tr>
						<td style="padding: 30px">관련 직업</td>
					</tr>
					<tr>
						<td style="padding: 30px">졸업 후 직장 임금</td>
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
						<td v-for="(items, index) in compareList" :key="index"></td>
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
import axios from 'axios';
export default {
	name: 'comparedepart',
	data() {
		return {
			activeTab: 'tot_tb', //초기 선택 탭

			//subject: '',
			major: '',
			DepInfo: [],
			employ: [],
		};
	},

	methods: {
		fetchData() {
			//let baseUrl = `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=203d6fa46456dfa6b49d3c578fda0f2a&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list`;

			// axios.all([axios.get(baseUrl), axios.get(baseUrl2)])
			axios
				.get(
					`https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=203d6fa46456dfa6b49d3c578fda0f2a&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list`,
				)
				.then((response) => {
					this.DepInfo = response.data.dataSearch.content.map((item) => item.mClass);
					this.employ = response.data.dataSearch.content.map((item) => item.employment);

					console.log(response);
				})
				.catch((error) => {
					console.error(error);
				});
		},
	},

	mounted() {
		this.fetchData();
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
