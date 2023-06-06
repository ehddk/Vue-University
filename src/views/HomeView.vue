<template>
	<div class="compare">
		<div class="compare_header">
			<h1>대학별 원하는 학과의 커리큘럼을 비교해보세요</h1>
			<p class="sub">
				기존에는 학과,입시 전형,성적 분석 비교 서비스만 있어 학과마다 다른 커리큘럼을 보려면 여러 창을<br />
				띄워서 직접 찾아봐야하는 불편함이 있으시진 않았나요?
			</p>
		</div>

		<div class="main_search">
			<div class="search_de" style="display: flex; background: rgb(212, 235, 239)">
				<div class="list" style="margin: 0 auto">
					<ul class="tabs" style="justify-items: cent">
						<li class="tab1" :class="{ active: activeTab === 'tab1' }" @click="activeTab = 'tab1'">대학</li>
						<li class="tab2" :class="{ active: activeTab === 'tab2' }" @click="activeTab = 'tab2'">학과</li>
					</ul>
					<div class="depart-container" style="justify-content: center; background: beige; width: 650px; height: 100px" v-if="activeTab === 'tab1'">
						<h3 style="color: navy">대학명</h3>
						<span class="input_search">
							<input class="search_text" type="text" placeholder="해당 학교를 입력하세요" v-model="search" @keyup.enter="content"
						/></span>
					</div>
					<div
						class="depart-container"
						style="justify-content: center; background: beige; display: block; width: 650px; height: 100px"
						v-if="activeTab === 'tab2'"
					>
						<div style="display: flex; margin-left: 20px">
							<h3 style="color: navy; line-height: 3">학과명</h3>
							<span class="input_search">
								<input class="search_text" type="text" placeholder="해당 학과명을 입력하세요" v-model="search" @keyup.enter="content"
							/></span>
						</div>

						<div class="depa" style="margin-top: 10px; margin-left: 10px; display: flex; align-items: center">
							<li v-for="(item, index) in majorList" :key="index" style="margin-left: 5px">
								<input
									type="checkbox"
									v-model="major"
									value="item.majorCode"
									@change="handleOptionClick(item.majorLine, item.majorCode, 'majorType')"
									:checked="item.majorLine === this.major"
								/>
								{{ item.majorLine }}
							</li>
						</div>
					</div>
				</div>
				<!-- <div class="tab_left" style="width: 20%">
							<ul class="tabmenu">
								<li class="tab_one"><div style="background-color: yellow; padding: 40px">대학</div></li>
								<li class="tab_two">학과</li>
							</ul>
						</div> -->
				<!-- <div class="depart-container" style="justify-content: center; width: 80%">
							<h3 style="color: navy">대학명</h3>
							<span class="input_search">
								<input class="search_text" type="text" placeholder="해당 학교/학과를 입력하세요" v-model="search" @keyup.enter="content" />
								<font-awesome-icon icon="search" @click="content"></font-awesome-icon>
							</span>
							<button @click="search" style="border: 0"><img src="./search.png" style="width: 20px; height: 20px; margin-left: 10px" /></button>
						</div> -->
				<!-- <div class="depart-container">
							<h3 style="color: navy">계열</h3>
							<span>
								<input type="checkbox" style="margin-left: 25px" v-model="checkedValues" value="1" @change="clickFunc" :true-value="yes" :false-value="no" />
								인문사회 <input type="checkbox" v-model="checkedValues" value="2" @change="clickFunc" /> 예체능
								<input type="checkbox" v-model="checkedValues" value="3" @change="clickFunc" /> 자연과학
								<input type="checkbox" v-model="checkedValues" value="4" @change="clickFunc" /> 공학
								<input type="checkbox" v-model="checkedValues" value="5" @change="clickFunc" /> 의학
							</span>
							<button class="save_btn">검색</button>
						</div> -->
			</div>
		</div>
	</div>

	<div class="notice">
		<div class="bg-left"></div>
		<div class="bg-right"></div>
		<div class="inner">
			<div class="inner_left">
				<h2>공지사항</h2>
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<a href="javascript:void(0)"></a>
					</div>
					<div class="swiper-slide">
						<a href="javascript:void(0)"></a>
					</div>
				</div>
				<div class="swiper-slide">
					<a href="javascript:void(0)"></a>
				</div>
			</div>
		</div>
		<div class="inner__right"></div>
	</div>
	<div id="content" style="margin-top: 20px">
		<div class="left">
			<h2 style="color: navy">적성 학과 찾기</h2>
			<br />
			<p>자신에게 맞는 과가 무엇인지 검사해보세요</p>
			<div id="test" style="padding: 10px 0 10px 0; margin-top: 20px">
				<div class="test_left" style="position: absolute; top: 140px; left: 20px">
					<h3>직업적성검사</h3>
					<br />
					<p style="font-size: 15px">진로 의사결정에 유용한 정보를 제공합니다.</p>
				</div>
				<div class="test_right" style="position: absolute; top: 140px; right: 30px">
					<p style="margin-left: 25px; font-size: 15px; font-weight: bold"><img src="./clock.png" /> 25분~30분</p>
					<br />
					<button class="link" @click="moveurl">검사 실시</button>
				</div>
			</div>
			<div id="test2" style="padding: 10px 0 10px 0; margin-top: 20px">
				<div class="test_left" style="position: absolute; top: 340px; left: 20px">
					<h3>이공계전공적합도검사</h3>
					<br />
					<p style="font-size: 15px">진로 의사결정에 유용한 정보를 제공합니다.</p>
				</div>
				<div class="test_right" style="position: absolute; top: 340px; right: 30px">
					<p style="margin-left: 25px; font-size: 15px; font-weight: bold"><img src="./clock.png" /> 25분~30분</p>
					<br />
					<button class="link" @click="moveurl_1">검사 실시</button>
				</div>
			</div>
		</div>

		<div class="right">
			<h2 style="color: navy">커뮤니티</h2>
			<br />
			<p>입시정보 서로 공유해봐요</p>
			<div id="community" style="margin-top: 20px">
				<p class="list" style="padding: 10px 0">
					<span class="title">대외활동 게시물</span>
					<span class="more" @click="mvCom">더보기</span>
				</p>

				<div id="news" style="padding: 10px 0">
					<div class="new_list">
						<span class="univ">[고려대]</span>
						<span class="text"> 독서실 고시반 프로그램 신청</span>
					</div>
					<div class="new_list">
						<span class="univ">2023</span>
						<span class="text"> JOINTERSHIP 활동가 25기 모집(~6/17)</span>
					</div>
					<div class="new_list">
						<span class="univ">2023</span>
						<span class="text"> 현대오토에버 스마트모빌리티 공학 체험교육 6기</span>
					</div>
					<div class="new_list">
						<span class="univ">2023</span>
						<span class="text"> 투두몰 서포터즈,대학생 기자 모집</span>
					</div>
				</div>

				<p class="list" style="margin-top: 20px; padding: 10px 0">
					<span class="title">취업 게시물</span>
					<span class="more" @click="mvCom">더보기</span>
				</p>
				<div id="news" style="padding: 5px 0">
					<div class="new_list">
						<span class="univ">[고려대]</span>
						<span class="text"> 독서실 고시반 프로그램 신청</span>
					</div>
					<div class="new_list">
						<span class="univ">[고려대]</span>
						<span class="text"> 독서실 고시반 프로그램 신청</span>
					</div>
					<div class="new_list">
						<span class="univ">[고려대]</span>
						<span class="text"> 독서실 고시반 프로그램 신청</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--대학 banner-->
	<div class="banner">
		<div class="banner_inner">
			<div class="ban_wrapper" style="max-width: 1100px">
				<div
					class="ban_viewport"
					style="width:100%; overf
    hidden; position:relative; height:40px;"
				></div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
//import HelloWorld from '@/components/HomeMain.vue'

export default {
	name: 'HomeView',
	data() {
		return {
			activeTab: 'tab1', //초기 선택 탭
			majorList: [
				{ majorLine: '인문계열', majorCode: 100391 },
				{ majorLine: '사회계열', majorCode: 100392 },
				{ majorLine: '교육계열', majorCode: 100393 },
				{ majorLine: '공학계열', majorCode: 100394 },
				{ majorLine: '자연계열', majorCode: 100395 },
				{ majorLine: '의약계열', majorCode: 100396 },
				{ majorLine: '예체능계열', majorCode: 100397 },
			],

			major: '',
			majorInfo: [],
		};
	},
	methods: {
		//api호출 받아오기. '&'' 하나당 = 변수 하나
		fetchData() {
			axios
				.get(
					'https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=203d6fa46456dfa6b49d3c578fda0f2a&svcType=api&svcCode=MAJOR&contentType=xml&gubun=univ_list',
				)
				.then((response) => {
					this.majorInfo = response.data.dataSearch.content;
					console.log(response);
				})
				.catch((error) => {
					console.error(error);
				});
		},
		moveurl() {
			window.location.href = 'https://www.work.go.kr/consltJobCarpa/jobPsyExam/jobPsyExamIntro.do';
		},
		moveurl_1() {
			window.location.href = 'https://sso.career.go.kr/';
		},
		//커뮤니티 페이지로 이동
		mvCom() {
			this.$router.push('/community');
		},
		//체크박스 중복 방지로
		handleOptionClick(majorLine, majorCode) {
			this.major = majorLine;
			this.fetchData(majorCode);
		},
	},

	//mounted() {
	//this.$axios.get('/api/homeview').then((result) => {
	//		console.log(result.data);
	//	});
	//},
};
</script>
<style scoped>
.compare {
	background: rgb(212, 235, 239);
	height: 580px;
	min-width: 1100px;
	/* position:relative; */
}
.compare_header {
	padding: 80px;
}
.compare h1 {
	font-size: 25px;

	text-align: center;
	/* margin-top:50px; */

	left: 640px;
}
.compare .sub {
	font-size: 15px;
	text-align: center;

	margin-top: 20px;
}
li {
	list-style: none;
}
.search_text {
	width: 450px;
	height: 40px;
	line-height: 24px;
	color: #292929;
	font-size: 15px;
	margin-left: 10px;
}

.search_de {
	position: relative;
	top: 20%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	/* min-width: 1100px; */
	margin-top: 100px;
}
.depart-container {
	display: flex;
	align-items: center;
	padding: 50px;
}
#depart {
	margin-left: 10px;
	width: 180px;
	height: 30px;
}

#search_content {
	/* background: white; */
	position: absolute;
	top: 430px;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	width: 872px;
	overflow: auto;
}
#test img,
#test2 img {
	width: 15px;
	height: 15px;
}
.save_btn {
	position: relative;
	top: 100px;
	padding: 10px 20px;
	left: 150px;

	border: 0;
	background: #99acb6;
}
.tab1 {
	left: 50px;
}
.notice {
	position: relative;
	width: 100%;
}
.notice .bg-right {
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	height: 100%;
	background-color: #eee;
}
.notice .bg-left {
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	background-color: #99acb6;
}
.notice .inner {
	height: 62px;
	display: flex;
}
.notice .inner_left h2 {
	color: black;
	font-size: 17px;
	font-weight: 700;
	margin-right: 20px;
}

.notice .inner_right {
	width: 40%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.notice .inner_right h2 {
	font-size: 17px;
	font-weight: 700;
}

/*--검사,게시물 --*/
#content {
	position: relative;
	margin: 0 auto;
	width: 1100px;
}
.left,
.right {
	width: 47%;
	height: 260px;
	margin-bottom: 20px;
	position: relative;
	top: 30px;
}
.left {
	float: left;
}
.right {
	float: right;
}

#test,
#test2 {
	border: 1px solid rgb(191, 188, 188);
	width: 500px;
	height: 150px;
}
#test2 {
	margin-top: 20px;
}

.test_two {
	margin-top: 30px;
	width: 540px;
}
.link {
	padding: 5px 25px 5px 25px;
	width: 147px;
	color: white;
	background: navy;
	border-style: none;
	border-radius: 5px;
}

#community {
	border: 1px solid rgb(191, 188, 188);
	width: 500px;
	height: 360px;
}
#community .list {
	border-bottom: 1px solid rgb(191, 188, 188);
	width: 450px;
}
#community .list,
.new_list {
	margin-left: 20px;
	font-size: 20px;
}

.more {
	display: inline-block;
	font-size: 10px;
	margin-left: 10px;
}
.title {
	font-weight: bold;
}

.row_right {
	margin-top: 10px;
}
#news .new_list {
	font-size: 20px;
}
</style>
