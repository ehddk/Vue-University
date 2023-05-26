<template>
  <div class="compare">
    <h1>대학별 원하는 학과의 커리큘럼을 비교해보세요</h1>
    <p class="sub">기존에는 학과,입시 전형,성적 분석 비교 서비스만 있어
학과마다 다른 커리큘럼을 보려면 여러 창을<br> 띄워서 직접 찾아봐야하는
불편함이 있으시진 않았나요?</p>

<span class="department">
  <div class="choice">
   
  <div class="society">
    <img class="one" src="../assets/society.png">
    <p>인물사회</p>
  
  </div>
  <div class="art">
    <img class="two" src="../assets/art.png">
    <p> 예체능</p>
  </div>
  <div class="nature" style="margin-top:-20px;">
    <img class="thr" src="../assets/nature.png">
    <p>자연과학</p>
  </div>
  <div class="science" style="margin-top:-20px;">
    <img class="four" src="../assets/science.png">
    <p >공학</p>
  </div>
  <div class="medi">
    <img class="five" src="../assets/medi.png">
    <p >의학</p>
  </div>
</div>
</span>

<span class="input-search">
  <input class="search_text" type="text" placeholder="해당 학교/학과를 입력하세요" v-model="search" @keyup.enter="content"> <font-awesome-icon icon="search" @click="content"></font-awesome-icon>
</span>
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
  .compare{
    background:rgb(212, 235, 239);
    height:500px;
    /* width:1100px; */
    /* position:relative; */
  }
  .compare h1{
    font-size:25px;
    margin-top:40px;
    text-align: center;
    /* margin-top:50px; */
    position:absolute;
    left:600px;
    /* left:500px; */ 
    
   
  }
  .compare .sub{
    font-size:15px;
    text-align: center;
    position:absolute;
    margin-top:90px;
    left:550px;
  }
  .department{
    /* display: flex; */
    justify-content: center;
  
    justify-content: space-between; 
  }
  .department p{
    font-weight:bold;
  }
  /*--input 태그--*/
  .compare .input-search{
    position:absolute;
   
    justify-content: center;
    margin-top:400px;
    left:600px;
    box-shadow: 0 6px 12px rgba(0,0,0,.12);
    padding-left: 12px;
    border-radius: 12px;
    height: 48px;
    width:440px;
    background-color: #fff;

  }
  .search_text{
  
    width:400px;
    height:40px;
    line-height: 24px;
    color: #292929;
    font-size: 15px;
    border-style:none;
  }


  .choice{
    display:flex;
    top:300px;
    left:300px;
    position:absolute;
    
  }
 
  .choice p{
    font-size:20px;
    text-align: center;
  }

  .department div {
    /* margin-top:200px; */
    margin-right: 50px; /* 간격 크기 조정 */
    margin-left:50px;
}
  .department .one, .two, .thr, .four, .five{
    width:100px;
    height:100px;
    background:rgb(255, 255, 255);
    border-radius: 5px;
    
  }
  #content{
   
    padding-left:70px;
   
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
.test_right{

}
#test, #test2{ 
  /* border:1px solid black;
  position:relative; */
  /* display:flex; */
  border:1px solid rgb(191, 188, 188);
  width:500px;
  
  height:150px;
  /* margin:0; */
  /* padding:0; */
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

