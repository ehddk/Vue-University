<template>
	<div style="background: #f4f5f9">
		<div id="content">
			<div class="lnb">
				<div class="lnb_title">마이페이지</div>
				<ul id="menus">
					<li class="menu_1">
						<router-link to="/save">관심 대학/학과</router-link>
					</li>

					<li class="menu_2">
						<router-link to="/mypage">개인정보</router-link>
					</li>
				</ul>
			</div>

			<div id="bodycontent">
				<div class="detail">
					<div class="detail_title">
						<h2>관심 대학 리스트</h2>
					</div>
					<div class="list">
						<h3>관심대학</h3>
						<ul class="tabs">
							<li class="tab1" :class="{ active: activeTab === 'tab1' }" @click="activeTab = 'tab1'">일반대학</li>
							<li class="tab2" :class="{ active: activeTab === 'tab2' }" @click="activeTab = 'tab2'">전문대학</li>
						</ul>

						<!--관심대학 테이블-->
						<div class="list_table" v-if="activeTab === 'tab1'">
							<table class="list1">
								<colgroup>
									<col style="width: 5%" />
									<col style="width: 25%" />
									<col style="width: 5%" />
									<col style="width: 12%" />
									<col style="width: 25%" />
									<col style="width: 5%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">목록</th>
										<th scope="col">대학명</th>
										<th scope="col">지역</th>
										<th scope="col">모집시기</th>
										<th scope="col">학과명</th>
										<th scope="col">참고</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>명지전문대학</td>
										<td>경기</td>
										<td>수시</td>
										<td>정보통신공학과</td>
										<td>X</td>
									</tr>
								</tbody>
							</table>
						</div>
						<!--전문대학 -->
						<div class="list_table" v-if="activeTab === 'tab2'">
							<table class="list2">
								<colgroup>
									<col style="width: 5%" />
									<col style="width: 25%" />
									<col style="width: 5%" />
									<col style="width: 12%" />
									<col style="width: 25%" />
									<col style="width: 5%" />
								</colgroup>
								<thead>
									<tr>
										<th scope="col">목록</th>
										<th scope="col">대학명</th>
										<th scope="col">지역</th>
										<th scope="col">모집시기</th>
										<th scope="col">학과명</th>
										<th scope="col">참고</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>데이터가 없습니다!</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'save',
	data() {
		return {
			activeTab: 'tab1', //초기 선택 탭
		};
	},
	methods: {
		normal: function () {},
		changeTab: function () {},
	},
};
</script>

<style>
.menu_1:hover,
.menu_2:hover {
	background: rgb(154, 154, 154);
}
.list {
	margin: 0;
	padding: 10px;
	margin-top: 10px;
	/* border:1px solid red; */
}
.tabs {
	height: 32px;
	padding: 0;
	margin-top: 10px;
	/* border-bottom: 1px solid navy; */
}
.tab1,
.tab2 {
	float: left;
	padding: 5px 50px 5px;
	letter-spacing: -1px;
	border-top: 1px solid #008394;
	border-right: 1px solid #008394;
	border-left: 1px solid #008394;
	background: rgb(177, 194, 203);
}

.tab2 {
	float: left;
	padding: 5px 50px 5px;
	letter-spacing: -1px;
}
.tab1.active,
.tab2.active {
	background: #008394;
	color: white;
}

.list_table {
	/* display:inline; */
}
.list1 {
	width: 100%;
	border-top: 2px solid #535353;
	border-bottom: 1px solid #535353;
	margin-top: 10px;
	padding: 5px;
}
.list1 th {
	border-bottom: 1px solid gray;
}
.list1 td {
	padding: 15px;
}
.list_table .list2 {
	width: 100%;
	padding: 5px;
	margin-top: 10px;
	border-top: 2px solid #535353;
	border-bottom: 1px solid #535353;
}
.list_table .list2 .nodata {
	width: 100%;
}
colgroup {
	display: table-column-group;
}
thead {
	display: table-header-group;
}
tr {
	display: table-row;
}
</style>
