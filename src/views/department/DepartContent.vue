<template>
  <div style="background: #f4f5f9; height:100vh" >
    <div id="depart_content">
        <div class="depart_header">
            <h2>정보통신공학</h2>
            <div class="confirm" >
            <p>검색조건 ></p>
        </div>
        </div>
        <div class="two_tabs">

        <ul class="tab">
                <li class="tab_1" :class="{active: activeTab === 'tab_1'}" @click="activeTab = 'tab_1'">학과 개요</li>
                <li class="tab_2" :class="{active: activeTab === 'tab_2'}" @click="activeTab = 'tab_2'"> Q & A </li>
            </ul>
        </div>
        <div class="depart_tab" v-if="activeTab === 'tab_1'">
            <div class="tab_header" style=" background: white;">
              <h2>학과소개</h2>
              <p>dfksdfkdfskldfjksdjfksjdjkfksdh</p>
            </div>
           
            <div class="tab_content1" style="margin-top:40px;  background: white;">
              <div class="tab_header">
                <h2>취득 자격증</h2>
                <p>dfsdfdsfsdssssssdfsfsdfsdfsdfsdfsdfsdfsdfsd</p>
              </div>
            </div>
            <div class="tab_content" style="margin-top:40px;  background: white;">
              <div class="tab_header">
                <h2>관련 학과</h2>
                <p>dsfsdf fsdfsdf sdfsdfsf fdgfgsgf</p>
              </div>

            </div>
        </div>

        <div class="depart_tab" v-if="activeTab === 'tab_2'">
          <div class="tab_header" style=" background: white;">
              <h2>1. 어떤 사람들에게 추천하고 싶나요?</h2>
              <p>dfksdfkdfskldfjksdjfksjdjkfksdh</p>
            </div>
           
            <div class="tab_content1" style="margin-top:40px;  background: white;">
              <div class="tab_header">
                <h2>2. 협업/프로젝트로 이루어지는 부분이 많나요?</h2>
                <p>dfsdfdsfsdssssssdfsfsdfsdfsdfsdfsdfsdfsdfsd</p>
              </div>
            </div>
            <div class="tab_content" style="margin-top:40px;  background: white;">
              <div class="tab_header">
                <h2>3. 현재 통계로 볼때 졸업 후 실제 가장 많이 진출하는 분야는 어디인가요?</h2>
                <p>dsfsdf fsdfsdf sdfsdfsf fdgfgsgf</p>
              </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:'departcontent',
data(){
  return{
    activeTab:'tab_1'
  }
},
methods:{
 
}
}
</script>

<style>
#depart_content{
 
    padding:0 150px 0 150px;
    height:100vh;
}
.depart_header{ 
    width:1100px;
    position:relative;
    margin:0 auto;
    top:50px;
    padding:20px;
}
.confirm{
    margin-top:30px;
    display: block;
}
.depart_tab{ 
   
    margin:0 0 0 20px;
    /* margin:80px auto; */
    /* padding:20px; */
    width:1100px;
    margin:0 auto;
}
.two_tabs {
  margin: 80px 20px 0 20px;
  width: 1100px;
  margin:0 auto;
  margin-top:60px;
}

.tab {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.tab_1{
  float:left;
    padding:5px 50px 0 ;   
     letter-spacing: -1px;
     /* border-top: 1px solid #d5ff1d;
    border-right: 1px solid #008394;
    border-left: 1px solid #008394; */
    background:#b4b4b4;
    color:black;
}
.tab_2{
 float:left;
 padding:5px 50px 0;
 letter-spacing: -1px;
 background:#b4b4b4;
 color:black;
}

.tab_header{
  padding:20px;
  box-shadow:3px 3px 3px 3px #999;
}
.tab_1.active{
  /* background:yellow; */
  background:#e6cd12;
}
.tab_2.active{
  background:#e6cd12;
  color:gray;
}
</style>