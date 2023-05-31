<template>
	<div class="depart-content" style="padding-top: 40px">
		<div style="min-width: 1100px; margin-left: auto; margin-right: auto; display: flex">
			<div style="margin-bottom: 20px; min-width: 260px">
				<div style="justify-content: space-between; display: flex; border-bottom: 1px solid rgb(213, 213, 213); padding-bottom: 20px; padding-top: 20px">
					<span style="font-size: 18px">검색 조건</span>
					<button class="reset"><img src="./reset.png" style="width: 15px; height: 15px" /><span>초기화</span></button>
				</div>
				<nav class="filter_school">
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

					<nav class="filter_school" :class="{ folded: isFolded }">
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
				<div class="area">
					<div style="display: flex; justify-content: space-between">
						<span style="font-size: 18px; padding: 5px">구분</span>
						<button class="fold" @click="toggleFold">
							<img src="./fold.png" style="width: 20px; height: 20px" />
						</button>
					</div>
					<nav class="filter_school">
						<ul id="filter" style="margin-top: 20px">
							<li>
								<input
									type="checkbox"
									style="margin-left: 25px"
									v-model="checkedValues"
									value="11"
									@change="handleOptionClick"
									:true-value="yes"
									:false-value="no"
								/>
								주간
							</li>
							<li>
								<input
									type="checkbox"
									style="margin-left: 25px"
									v-model="checkedValues"
									value="12"
									@change="handleOptionClick"
									:true-value="yes"
									:false-value="no"
								/>
								야간
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
				<div class="option">
					<p style="line-height: 3">검색조건 > 일반대학 > 서울</p>
				</div>
				<div class="choice" :class="{ show: isChoiceVisible }">
					<div class="grid" v-for="(item, index) in compareList" :key="index">{{ item }} ,{{ item.region }}</div>

					<button @click="handleModal" style="padding: 5px 30px; height: 30px; left: 30px">대학 비교</button>
					<button @click="handleModal" style="padding: 5px 30px; height: 30px">학과 비교</button>
				</div>
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
								<td>{{ aa }}</td>
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
					<!-- <div class="modal_box" v-if="show">
						<h3 style="padding: 15px; background: #efefef">비교</h3>
						<ul class="modal_list">
							<li id="first" style="border: 1px solid red; padding: 25px">
								<button style="border: 0; background: 0; float: right"><img src="./close.png" alt="닫기" /></button>
								<p class="univ_name">서울대학교</p>
								<p class="univ_de">정보통신공학과</p>
							</li>
							<li id="second" style="border: 1px solid red; padding: 25px; margin-left: 20px">
								<button style="border: 0; background: 0; float: right"><img src="./close.png" /></button>
								<p class="univ_name">서울대학교</p>
								<p class="univ_de">정보통신공학과</p>
							</li>
							<li id="third " style="border: 1px solid red; padding: 25px; margin-left: 20px">
								<button style="border: 0; background: 0; float: right"><img src="./close.png" /></button>
								<p class="univ_name">서울대학교</p>
								<p class="univ_de">정보통신공학과</p>
							</li>
						</ul>
						<div class="com_btn" style="justify-content: center; text-align: center">
							<button @click="compare_univ">학교 비교</button>
							<button @click="compare_dep">학과 비교</button>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
	<section v-if="isOpenModal">
		<div v-for="(items, index) in compareList" :key="index">
			{{ items }}
		</div>
	</section>
</template>

<script>
import axios from 'axios';

export default {
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

			univInfo: [],

			isFolded: false,
			isOpenModal: false,
			isChoiceVisible: false,
			compareList: [],
		};
	},

	methods: {
		// handleBeforeUnload(event) {
		//    event.preventDefault();
		//    event.returnValue = '';
		// },
		fetchData(regionNumber, typeNumber, schoolNumber) {
			let baseUrl = `https://www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=203d6fa46456dfa6b49d3c578fda0f2a&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list`;

			regionNumber && (baseUrl += `&region=${regionNumber}`);
			typeNumber && (baseUrl += `&sch1=${typeNumber}`);
			schoolNumber && (baseUrl += `&sch2=${schoolNumber}`);

			axios
				.get(baseUrl)
				.then((response) => {
					this.univInfo = response.data.dataSearch.content;
					// this.gubun = response.data.dataSearch.content;
				})
				.catch((error) => {
					console.error(error);
				});
		},

		handleCompareClick(school) {
			const { schoolName, region } = school;
			const existingSchool = this.compareList.find((item) => item.schoolName === schoolName && item.region === region);
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
.filter_school .folded {
	max-height: 0;
	padding: 0;
	display: none;
}
.filter_school .notfolded {
	transition: max-height 0.3s ease-in-out;
}
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
	width: 800px;
	height: 200px;
	border: 1px solid red;
	display: flex;
	margin-left: 20px;
	margin-top: 10px;
	padding: 5px;
}

.grid {
	border: 1px solid green;
	padding: 20px;
}
</style>
