<template>
	<div class="depart-content" style="padding-top: 40px">
		<div style="min-width: 1100px; margin-left: auto; margin-right: auto; display: flex">
			<div style="margin-bottom: 20px; min-width: 260px">
				<div style="justify-content: space-between; display: flex; border-bottom: 1px solid rgb(213, 213, 213); padding-bottom: 30px; padding-top: 25px">
					<span style="font-size: 18px">검색 조건</span>
					<button class="reset"><img src="./reset.png" style="width: 15px; height: 15px" /><span>초기화</span></button>
				</div>
				<div style="display: flex; justify-content: space-between">
					<span style="font-size: 18px; margin-top: 10px">학교 유형</span>
					<button class="fold" @click="toggleFold">
						<img src="./fold.png" style="width: 20px; height: 20px" />
					</button>
				</div>
				<nav class="filter_school" v-if="isFolded">
					<ul id="filter" style="margin-top: 20px">
						<li v-for="(item, index) in gubunList" :key="index">
							<input
								type="checkbox"
								style="margin-left: 25px"
								v-model="gubun"
								:value="item.typeCode"
								@change="handleOptionClick(item.schooltype, item.typeCode, 'schoolType')"
								:checked="item.schooltype === this.gubun"
							/>
							{{ item.schooltype }}
						</li>
					</ul>
				</nav>
				<div class="area">
					<div style="display: flex; justify-content: space-between">
						<span style="font-size: 18px; padding: 5px">지역</span>
						<button class="fold" @click="toggleFold">
							<img src="./fold.png" style="width: 20px; height: 20px" />
						</button>
					</div>

					<nav class="filter_school" v-if="isFolded">
						<ul id="filter" style="margin-top: 20px">
							<li v-for="(item, index) in regionList" :key="index">
								<input
									type="checkbox"
									style="margin-left: 25px"
									v-model="region"
									:value="item.regionCode"
									@change="() => handleOptionClick(item.regionName, item.regionCode, 'region')"
									:checked="item.regionName === this.region"
								/>
								{{ item.regionName }}
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="bodycontent">
				<div class="search_school">
					<span class="input_search">
						<input class="search_text" type="text" placeholder="해당 학교/학과를 입력하세요" v-model="search" @keyup.enter="content" />

						<button @click="search" style="border: 0"><img src="./search.png" style="width: 20px; height: 20px; margin-left: 10px" /></button>
					</span>
				</div>
				<!--비교 버튼 누르면 보이는 창-->
				<div class="choice" :class="{ show: isChoiceVisible, hide: !isChoiceVisible }">
					<div class="grid" v-for="(item, index) in compareList" :key="index">{{ item }}</div>
					<div style="display: flex; flex-direction: column; position: relative; justify-content: center; margin-left: 20px">
						<button @click="handleModal" style="padding: 5px 30px; height: 30px; left: 30px">대학 비교</button>
						<button @click="movepg" style="padding: 5px 30px; margin-top: 10px; height: 30px">학과 비교</button>
					</div>
				</div>

				<!--테이블,표-->
				<div class="list_table" style="padding: 15px">
					<table class="list1">
						<colgroup>
							<col style="width: 20%" />
							<col style="width: 20%" />
							<col style="width: 13%" />
							<col style="width: 13%" />
							<col style="width: 13%" />
							<col style="width: 7%" />
						</colgroup>
						<thead>
							<tr>
								<th scope="col">학과명</th>
								<th scope="col">대학명</th>
								<th scope="col">지역</th>

								<th scope="col">구분</th>
								<th scope="col">학교 유형</th>
								<th scope="col">비교</th>
							</tr>
						</thead>
						<tbody>
							<!-- <tr v-for="(item,index) in tablelist" :key="index"> -->
							<tr v-for="(res, index) in this.univInfo" :key="index">
								<td>{{ res.major }}</td>
								<!--학과-->
								<td>{{ res.schoolName }}</td>
								<td>{{ res.region }}</td>

								<td>{{ res.campusName }}</td>
								<td>{{ res.schoolType }}</td>
								<td
									class="button"
									@click="
										() => {
											handleCompareClick(res.schoolName);
											handleChoiceClick();
										}
									"
								>
									<img src="./check.png" style="width: 20px; height: 20px" />
								</td>
							</tr>
						</tbody>
					</table>
					<!-- <pagination v-if="pagination" @movePage="movePage" :data="pagination"></pagination> -->
				</div>
			</div>
		</div>
	</div>
	<!----모달창 띄우기-->
	<!-- <section class="modal" v-if="isOpenModal == true" @click="close($event)">
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
								<td style="padding: 30px">구분</td>
								<td v-for="(items, index) in compareList" :key="index">{{ items }}</td>
							</tr>
							<tr>
								<td style="padding: 30px">전체 수</td>
								<td v-for="(items, index) in countList" :key="index">{{ res.totalCount }}</td>
							</tr>
							<tr>
								<td style="padding: 30px">주간 / 야간</td>
							</tr>
							<tr>
								<td style="padding: 30px">남녀 성비</td>
							</tr>
							<tr>
								<td style="padding: 30px">전공심화 여부</td>
							</tr>
						</tbody>
					</table>
					<button class="close_btn">닫기</button>
				</div>
			</div>
		</div>
	</section> -->
	<univmodal :isOpenModal="isOpenModal" @closeModal="closeModal"></univmodal>
</template>

<script>
import axios from 'axios';
import univmodal from '../components/UnivModal.vue';
// import pagination from '../components/Pagination.vue';

export default {
	components: { univmodal },
	name: 'department',
	data() {
		return {
			items: {},

			regionList: [
				{ regionName: '서울', regionCode: 100260 },
				{ regionName: '부산', regionCode: 100267 },
				{ regionName: '인천', regionCode: 100269 },
				{ regionName: '대전', regionCode: 100271 },
				{ regionName: '대구', regionCode: 100272 },
				{ regionName: '울산', regionCode: 100273 },
				{ regionName: '광주', regionCode: 100275 },
				{ regionName: '경기도', regionCode: 100276 },
				{ regionName: '강원도', regionCode: 100278 },
				{ regionName: '충청북도', regionCode: 100280 },
				{ regionName: '충청남도', regionCode: 100281 },
				{ regionName: '전북', regionCode: 100282 },
				{ regionName: '전남', regionCode: 100283 },
				{ regionName: '경북', regionCode: 100285 },
				{ regionName: '경남', regionCode: 100291 },
				{ regionName: '제주도', regionCode: 100292 },
			],
			gubunList: [
				{ schooltype: '일반', typeCode: 100328 },
				{ schooltype: '전문', typeCode: 100324 },
				{ schooltype: '사이버(2년)', typeCode: 100326 },
				{ schooltype: '기능', typeCode: 100325 },
				{ schooltype: '사이버(4년)', typeCode: 100331 },
				{ schooltype: '교육', typeCode: 100329 },
			],

			//체크한 내용이 배열에 들어오게 됨.
			checkedValues: [],

			campusName: '',

			region: '',
			regionCode: '',

			gubun: '',
			gubunCode: '',

			typeNumber: '',
			majorNumber: '',
			//mClass: '',
			major: '',
			totalCount: '',

			univInfo: [],

			isFolded: true,
			isOpenModal: false,
			isChoiceVisible: false,
			compareList: [],

			List: [],

			// page: 1,
			// pagination: null,
		};
	},

	methods: {
		// close(event) {
		// 	if (event.target.classList.contains('modal') || event.target.classList.contains('close_btn')) {
		// 		this.isOpenModal = false;
		// 	} else if (event.target.classList.contains('modal')) {
		// 		this.isOpenModal = true;
		// 	}
		// },
		fetchData(regionNumber, typeNumber, schoolNumber) {
			let baseUrl1 = `https://www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=203d6fa46456dfa6b49d3c578fda0f2a&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list`;

			regionNumber && (baseUrl1 += `&region=${regionNumber}`);
			typeNumber && (baseUrl1 += `&sch1=${typeNumber}`);
			schoolNumber && (baseUrl1 += `&sch2=${schoolNumber}`);

			//학과명 불러오기
			//let baseUrl2 = `https://www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=203d6fa46456dfa6b49d3c578fda0f2a&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list&content`;

			//majorNumber && (baseUrl2 += `&major=${majorNumber}`);
			//subjectNumber && (baseUrl2 += `&subject=${subjectNumber}`);
			// let baseUrl2 = `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=203d6fa46456dfa6b49d3c578fda0f2a&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list`;

			// total && (baseUrl2 += `&totalCount=${total}`);

			// axios.all([axios.get(baseUrl1), axios.get(baseUrl2)]).then(
			// 	axios.spread((res1, res2) => {
			// 		this.univInfo = res1.data.dataSearch.content;
			// 		this.univInfo = res2.data.dataSearch.content;
			// 		console.log(res1);
			// 		console.log(res2);

			// 	}),
			// );
			axios
				.get(baseUrl1)
				.then((response) => {
					this.univInfo = response.data.dataSearch.content;
					this.gubun = response.data.dataSearch.content;
				})
				.catch((error) => {
					console.error(error);
				});
		},

		handleCompareClick(school) {
			const { schoolName, region } = school;
			const existingSchool = this.compareList.find((item) => item.schoolName === schoolName && item.region === region);

			//갯수 제한:2개
			if (this.compareList.length >= 2) {
				alert('최대 2개까지만 비교할 수 있습니다.');
				return;
			}
			this.compareList.includes(school)
				? (this.compareList = this.compareList.filter((res) => res !== school))
				: (this.compareList = [...this.compareList, school]);
		},
		handleChoiceClick() {
			this.isChoiceVisible = !this.isChoiceVisible;
		},
		handleModal() {
			this.isOpenModal = true;
		},
		closeModal() {
			this.isOpenModal = false;
		},

		//학과비교,대학비교
		compare() {},
		//메뉴 접히기
		toggleFold() {
			this.isFolded = !this.isFolded;
		},

		//중복체크 방지
		handleOptionClick(name, code, type) {
			if (type === 'region') {
				this.region = name;
				this.regionCode = code;
			} else if (type === 'schoolType') {
				this.gubun = name;
				this.gubunCode = code;

				if (code === (100328 || 100329 || 100330 || 100331 || 100332)) this.typeNumber = 100323;
				else if (code === (100324 || 100325 || 100326 || 100327)) this.typeNumber = 100322;
			}

			this.fetchData(this.regionCode, this.typeNumber, this.gubunCode);
		},

		hadleOptionClick(schooltype, typeCode) {
			this.gubun = schooltype;
			this.fetchData(typeCode);
		},
		movePage() {
			this.$router.push('/department/departcontent');
		},
		movepg() {
			this.$router.push('/department/comparedepart');
		},
		// movePage(page) {
		// 	this.page = page;
		// 	this.getList();
		// },
		// getList() {
		// 	this.$axios
		// 		.post('/api/department', {
		// 			page: this.page,
		// 		})
		// 		.then((result) => {
		// 			console.log(result.data);
		// 			this.regionList = this.list;
		// 			this.gubunList = this.list;
		// 			this.pagintion = result.data.pagination;
		// 		});
		// },
	},

	created() {
		window.addEventListener('beforeunload', this.handleBeforeUnload);
	},
	// beforeDestory() {
	//    window.removeEventListener('beforeunload', this.handleBeforeUnload);
	// },
};
</script>

<style>
.depart-content {
	min-height: 1100px;
	background-color: #f4f5f9;

	position: relative;
	display: flex;
}

.search_de {
	background: white;
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	width: 872px;
}
.depart-container {
	display: flex;
	align-items: center;
	padding: 10px;
}
#depart {
	margin-left: 10px;
	width: 180px;
	height: 30px;
}

#search_content {
	background: white;
	position: absolute;
	top: 430px;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	width: 872px;
	overflow: auto;
}

/*학과 div */

.reset,
.fold {
	border: 0;
	color: gray;
	background: 0;
}
#filter > li {
	margin-bottom: 15px;
	font-size: 15px;
	font-weight: 100;
}
.filter_school {
	border-bottom: 1px solid rgb(213, 213, 213);
	overflow: hidden;
	transition: max-height 0.3s ease-in-out;
}
/* .filter_school .folded {
	max-height: 0;
	padding: 0;
	display: none;
}
.filter_school .notfolded {
	transition: max-height 0.3s ease-in-out;
} */
.bodycontent {
	width: 100%;
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	/* background:white; */
}
.detail {
	min-height: 600px;
	margin: 10px 0 70px 24px;
	padding: 5px 0;
}
.search_text {
	font-size: 20px;
	width: 300px;
	padding: 5px;
	background: #d1dff1;
	border: 0;
}
.search_school {
	margin-top: 20px;
	margin-left: 20px;
}

.option {
	width: 800px;
	height: 50px;
	margin-left: 20px;
	background: white;
	margin-top: 10px;
	padding: 5px;
}
.list1 td {
	text-align: center;
}
.choice {
	width: 780px;
	height: 100px;

	display: flex;
	margin-left: 20px;
	margin-top: 10px;
	padding: 5px;
}
.show {
	display: flex;
}
.hide {
	display: none;
}
.grid {
	width: 150px;
	height: 100px;
	border-radius: 5px;
	border: 1px solid gray;
	font-size: 20px;
	text-align: center;
	line-height: 5;
	margin-left: 10px;
}

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
