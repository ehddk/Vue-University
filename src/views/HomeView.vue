<template>
  <div class="compare">
    <div class="compare_header" style="border:lpx solid red;">
      <h1>대학별 원하는 학과의 커리큘럼을 비교해보세요</h1>
    <p class="sub">기존에는 학과,입시 전형,성적 분석 비교 서비스만 있어
  학과마다 다른 커리큘럼을 보려면 여러 창을<br> 띄워서 직접 찾아봐야하는
  불편함이 있으시진 않았나요?</p>
    </div>
<!-- <span class="department">
  <div class="choice">
   
  <div class="society">
    <img class="one" src="../assets/society.png">
    <p>인물사회</p>
  
  </div>
  <div class="art">
    <img class="two" src="../assets/art.png">
    <p> 예체능</p>
  </div>
  <div class="nature">
    <img class="thr" src="../assets/nature.png">
    <p>자연과학</p>
  </div>
  <div class="science">
    <img class="four" src="../assets/science.png">
    <p >공학</p>
  </div>
  <div class="medi">
    <img class="five" src="../assets/medi.png">
    <p >의학</p>
  </div>
</div>
</span> -->
<div class="main_search">
      <div id="bodycontent">
        <div class="detail1">
         <div class="search_de">
            <div class="depart-container" style="justify-content:center">
                <h3 style="color:navy;">대학명</h3>
                <span class="input_search">
  <input class="search_text" type="text"  placeholder="해당 학교/학과를 입력하세요" v-model="search" @keyup.enter="content"> <font-awesome-icon icon="search" @click="content"></font-awesome-icon>
</span>
<button @click="search" style="border:0"><img src="./search.png" style="width:20px;height:20px; margin-left:10px;"></button>
            </div>
            <div class="depart-container">
                <h3 style="color:navy;">계열</h3>
                <span>
                <input type="checkbox"  style="margin-left:25px;" v-model="checkedValues" value="1" @change="clickFunc" :true-value="yes" :false-value="no"> 인문사회
                <input type="checkbox" v-model="checkedValues" value="2" @change="clickFunc"> 예체능
                <input type="checkbox" v-model='checkedValues' value="3"  @change="clickFunc"> 자연과학
                <input type="checkbox" v-model='checkedValues' value="4"  @change="clickFunc"> 공학
                <input type="checkbox" v-model='checkedValues' value="5"  @change="clickFunc"> 의학
                </span>
                <button class="save_btn">검색</button>
            </div>
         </div>
         
        </div>
        
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
<div id="content" style="margin-top:20px;">
  <div class="left">
    <h2 style="color:navy">적성 학과 찾기</h2>
  <p>자신에게 맞는 과가 무엇인지 검사해보세요</p>
  <div id="test" style="margin-top:20px;">
    <div class="test_left" style="float:left; margin-left:20px; margin-top:40px;">
      <h3>
        직업적성검사
      </h3><br>
      <p>진로 의사결정에 유용한 정보를 제공합니다.</p>
    </div>
    <div class="test_right" style="float:right; margin-right:40px; margin-top:50px;">
      <p style="margin-left:20px;">25분~30분 소요</p>
      <button class="link" @click="moveurl" >검사 실시</button>
    </div>
    </div>
    <div id="test2">
      <div class="test_left" style="float:left; margin-left:20px; margin-top:40px;">
      <h3>
        이공계전공적합도검사
      </h3>
      <br>
      <p>진로 의사결정에 유용한 정보를 제공합니다.</p>
    </div>
    <div class="test_right" style="float:right; margin-right:40px; margin-top:50px;">
      <p style="margin-left:20px;">25분~30분 소요</p>
      <button class="link" @click="moveurl_1">검사 실시</button>  
    </div>
  </div>
</div>
 
  <div class="right">
    <h2 style="color:navy">커뮤니티</h2>
    <p>입시정보 서로 공유해봐요</p>
    <div id="community" style="margin-top:20px;">
      <p class="list" style="padding:10px 0;">
        <span class="title">대외활동 게시물</span>
        <span class="more">더보기</span>
      </p>
      
      <div id="news" style="padding:10px 0;">
        
        <div class="new_list">
          <span class="univ">[고려대]</span>
        <span class="text">  독서실 고시반 프로그램 신청</span>
        </div>
        <div class="new_list">
          <span class="univ">[고려대]</span>
        <span class="text">  독서실 고시반 프로그램 신청</span>
        </div>
        <div class="new_list">
          <span class="univ">[고려대]</span>
        <span class="text">  독서실 고시반 프로그램 신청</span>
        </div>
       
      </div>
     
  
      <p class="list" style="margin-top:40px">
        <span class="title">취업 게시물</span>
        <span class="more">더보기</span>
      </p>
      <div id="news" style="padding:5px 0;">
        
        <div class="new_list">
          <span class="univ">[고려대]</span>
        <span class="text">  독서실 고시반 프로그램 신청</span>
        </div>
        <div class="new_list">
          <span class="univ">[고려대]</span>
        <span class="text">  독서실 고시반 프로그램 신청</span>
        </div>
        <div class="new_list">
          <span class="univ">[고려대]</span>
        <span class="text">  독서실 고시반 프로그램 신청</span>
        </div>
        
      </div>
    </div>
  </div>
</div>
<!--대학 banner-->
<div class="banner">
  <div class="banner_inner">
    <div class="ban_wrapper" style="max-width:1100px;">
    <div class="ban_viewport" style="width:100%; overf
    hidden; position:relative; height:40px;"></div>
    </div>
  </div>

</div>


</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HomeMain.vue'

export default {
  name: 'HomeView',
  methods:{
    moveurl(){
      window.location.href='https://www.work.go.kr/consltJobCarpa/jobPsyExam/jobPsyExamIntro.do';
    },
    moveurl_1(){
      window.location.href='https://sso.career.go.kr/';
    }
  }
}
</script>
<style scoped>
.search_de{
  margin-top:250px;
}
  .compare{
    background:rgb(212, 235, 239);
    height:500px;
    min-width:1100px; 
    /* position:relative; */
  }
  .compare h1{
    font-size:25px;
    margin-top:70px;
    /* text-align: center; */
    /* margin-top:50px; */
    position:absolute;
    left:640px;
   
  }
  .compare .sub{
    font-size:15px;
    text-align: center;
    
    position:absolute;
    margin-top:130px;
    left:600px;
  }

  .search_text{
  
    width:400px;
    height:40px;
    line-height: 24px;
    color: #292929;
    font-size: 15px;
    margin-left:10px;
  }

.search_de{

background: white;
position: absolute;
top: 20%;
left: 50%;
transform: translate(-50%, -50%);
padding: 20px;
min-width: 1100px;

}
.depart-container{
display: flex;
align-items:center;
padding:10px;
}
#depart{
margin-left:10px;
width:180px;
height:30px;
}

#search_content{
background: white;
position: absolute;
top:430px;
left:50%;
transform: translate(-50%, -50%);
padding: 20px;
width: 872px;
overflow: auto;
}
 #content{
   padding-left:70px;
 }
 .save_btn{
    position:relative;
    top:100px;
    padding:10px 20px;
    left:150px;
   
    border:0;
    background:#99acb6;
  }
  .notice{
  position: relative;
  width:100%;
}
.notice .bg-right{
  position: absolute;
  top:0;
  right:0;
  width:50%;
  height:100%;
  background-color:#eee;
}
.notice .bg-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #99acb6;
}
.notice .inner{
  height:62px;
  display: flex;
}
.notice .inner_left h2{
  color:black;
  font-size: 17px;
  font-weight:700;
  margin-right:20px;
}

.notice  .inner_right {
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.notice  .inner_right h2 {
  font-size: 17px;
  font-weight: 700;
}

/*--검사,게시물 --*/
#content{
  position:relative;
  margin:0 auto;
  width:1100px;
}
.left, .right{
  width:47%;
  height:260px;
  margin-bottom:20px;
  position:relative;
  top:30px;
}
.left{
  float:left;
}
.right{
  float:right;
}

#test, #test2{ 
  border:1px solid rgb(191, 188, 188);
  width:500px;
  height:150px;
}
#test2{
  margin-top:20px;
}

.test_two{
  margin-top:30px;
  width:540px;
}
.link{
  padding:5px 30px 5px 30px;
  width:147px;
  color:white;
  background:navy;
  border-style:none;
  border-radius:5px ;
}

#community{
  border:1px solid rgb(191, 188, 188);
  width:500px;
  height:320px;
}
#community .list{
  border-bottom:1px solid rgb(191, 188, 188);
  width:400px;
}
#community .list, .new_list{
  margin-left:20px;
  font-size:20px;
}

.more{
  display:inline-block;
  font-size:10px;
  margin-left:10px;
}
.title{
  font-weight: bold;
}
.new_list{
  font-size:13px;
}

.row_right{
  margin-top:10px;
}
#news .new_list{
  font-size:20px;
}

</style>

