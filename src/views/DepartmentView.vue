<template>
  <div class="depart-content" style="padding-top: 40px">
    <div
      style="
        min-width: 1100px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
      "
    >
      <div style="margin-bottom: 20px; min-width: 260px">
        <div
          style="
            justify-content: space-between;
            display: flex;
            border-bottom: 1px solid rgb(213, 213, 213);
            padding-bottom: 20px; padding-top:20px;
          "
        >
          <span style="font-size: 18px">검색 조건</span>
          <button class="reset">
            <img src="./reset.png" style="width:15px;height:15px"/><span>초기화</span>
          </button>
        </div>
        <nav class="filter_school">
          <ul id="filter" style="margin-top: 20px">
            <li>
              <input
                type="checkbox"
                style="margin-left: 25px"
                v-model="checkedValues"
                value="1"
                @change="clickFunc"
                :true-value="yes"
                :false-value="no"
              />
              일반대학
            </li>
            <li>
              <input
                type="checkbox"
                style="margin-left: 25px"
                v-model="checkedValues"
                value="2"
                @change="clickFunc"
                :true-value="yes"
                :false-value="no"
              />
              전문대학
            </li>
            <li>
              <input
                type="checkbox"
                style="margin-left: 25px"
                v-model="checkedValues"
                value="3"
                @change="clickFunc"
                :true-value="yes"
                :false-value="no"
              />
              대학원
            </li>
          </ul>
        </nav>
        <div class="area">
          <div style="display: flex; justify-content: space-between">
            <span style="font-size: 18px;  padding:5px">지역</span>
            <button class="fold" @click="toggleFold">
              <img src="./fold.png" style="width:20px;height:20px;" />
            </button>
          </div>

          <nav class="filter_school" :class="{ folded: isFolded }">
            <ul id="filter" style="margin-top: 20px">
              <li>
                <input
                  type="checkbox"
                  style="margin-left: 25px"
                  v-model="checkedValues"
                  value="4"
                  @change="clickFunc"
                  :true-value="yes"
                  :false-value="no"
                />
                서울
              </li>
              <li>
                <input
                  type="checkbox"
                  style="margin-left: 25px"
                  v-model="checkedValues"
                  value="5"
                  @change="clickFunc"
                  :true-value="yes"
                  :false-value="no"
                />
                경기도
              </li>
              <li>
                <input
                  type="checkbox"
                  style="margin-left: 25px"
                  v-model="checkedValues"
                  value="6"
                  @change="clickFunc"
                  :true-value="yes"
                  :false-value="no"
                />
                강원도
              </li>
              <li>
                <input
                  type="checkbox"
                  style="margin-left: 25px"
                  v-model="checkedValues"
                  value="7"
                  @change="clickFunc"
                  :true-value="yes"
                  :false-value="no"
                />
                충북/충남
              </li>
              <li>
                <input
                  type="checkbox"
                  style="margin-left: 25px"
                  v-model="checkedValues"
                  value="8"
                  @change="clickFunc"
                  :true-value="yes"
                  :false-value="no"
                />
                전북/전남
              </li>
              <li>
                <input
                  type="checkbox"
                  style="margin-left: 25px"
                  v-model="checkedValues"
                  value="9"
                  @change="clickFunc"
                  :true-value="yes"
                  :false-value="no"
                />
                경남/경북
              </li>
              <li>
                <input
                  type="checkbox"
                  style="margin-left: 25px"
                  v-model="checkedValues"
                  value="10"
                  @change="clickFunc"
                  :true-value="yes"
                  :false-value="no"/>제주도</li>
            </ul>
          </nav>
        </div>
        <div class="area">
          <div style="display: flex; justify-content: space-between">
            <span style="font-size:18px; padding:5px;">구분</span>
            <button class="fold" @click="toggleFold">
              <img src="./fold.png" style="width:20px;height:20px;" />
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
                  @change="clickFunc"
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
                  @change="clickFunc"
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
            <input
              class="search_text"
              type="text"
              placeholder="해당 학교/학과를 입력하세요"
              v-model="search"
              @keyup.enter="content"
            />

            <button @click="search" style="border:0"><img src="./search.png" style="width:20px;height:20px; margin-left:10px;"></button>
          </span>
        </div>
        <div class="option" >
          <p style="line-height:3;">검색조건 > 일반대학 > 서울</p>
        </div>
        <div class="list_table" style="padding:15px;">
                    <table class="list1">
                        <colgroup>
                            <col style="width:20%">
                            <col style="width:20%">
                            <col style="width:7%">
                            <col style="width:7%">
                            <col style="width:9%">
                            <col style="width:7%">
                            <col style="width:5%">
                        </colgroup>
                       <thead>
                        <tr>
                            <th scope="col">학과명</th>
                            <th scope="col">대학명</th>
                            <th scope="col">지역</th>
                            <th scope="col">구분</th>
                            <th scope="col">모집시기</th>
                            <th scope="col">취업률</th>
                            <th scope="col">비교</th>
                        </tr>
                       </thead>
                       <tbody>
                        <!-- <tr v-for="(item,index) in tablelist" :key="index"> -->
                          <tr>
                            <td>정보통신공학과</td>
                            <td>명지전문대학</td>
                            <td>경기</td>
                            <td>주간/야간</td>
                            <td>수시</td>
                            <td>67.8%</td>
                            <td><button @click="compare" style="border:0"><img src='./check.png/' style="width:20px;height:20px;"></button></td>
                        </tr>
                        <tr>
                            <td>정보통신공학과</td>
                            <td>명지전문대학</td>
                            <td>경기</td>
                            <td>주간/야간</td>
                            <td>수시</td>
                            <td>67.8%</td>
                            <td><button @click="" style="border:0"><img src='./check.png/' style="width:20px;height:20px;"></button></td>
                        </tr>
                       </tbody>
                    </table>
                </div>
              </div>
            </div>
        </div>
</template>

<script>
export default {
  name: "department",
  data() {
    return {
      //체크한 내용이 배열에 들어오게 됨.
      checkedValues: [],
      isFolded: false
    };
  },
  methods: {
    //학과비교,대학비교
    compare(){
      
    },
    //메뉴 접히기
    toggleFold() {
      this.isFolded = !this.isFolded;
    },
    //중복체크 방지
    clickFunc(event) {
      for (let i = 0; i < this.checkedValues.length; i++) {
        if (this.checkedValues[i] !== event.target.value) {
          console.log(this.checkedValues[i]);
          this.checkedValues.splice(i, 1);
        }
      }
    },
    movePage() {
      this.$router.push("/department/departcontent");
    }
  }
};
</script>

<style>
.depart-content {
  min-height: 1100px;
  background-color: #f4f5f9;

  position: relative;
  display: flex;
}
/* #content {
  position: relative;
  margin: 0 auto;
  width: 1100px;
  height: 100%;
  min-height: 600px;
} */
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
/* .save_btn{
    position:absolute;
   padding:5px 30px;
    top:34%;
 left:46%;
} */
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
  background:0;
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
.search_text{
  font-size:20px;
  width:300px;
  padding:5px;
  background:#d1dff1;
  border:0;
  
}
.search_school{
  margin-top:20px;
  margin-left:20px;
}

.option{
  width:800px;
  height:50px;
  margin-left:20px;
  background:white;
  margin-top:10px;
  padding:5px;
}
.list1 td{
  text-align: center;
}
</style>
