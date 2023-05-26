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
<div id="content">
  <div class="left">
    <h2 style="color:navy">적성 학과 찾기</h2>
  <p>자신에게 맞는 과가 무엇인지 검사해보세요</p>
  <div id="test">
    <div class="test_left" style="float:left; margin-left:20px; margin-top:20px;">
      <h3>
        직업적성검사
      </h3>
      <p>진로 의사결정에 유용한 정보를 제공합니다.</p>
    </div>
    <div class="test_right" style="float:right; margin-right:40px; margin-top:20px;">
      <p>25분~30분 소요</p>
      <button class="link">검사 실시</button>
    </div>
    </div>
    <div id="test2">
      <div class="test_left" style="float:left; margin-left:20px; margin-top:20px;">
      <h3>
        이공계전공적합도검사
      </h3>
      <p>진로 의사결정에 유용한 정보를 제공합니다.</p>
    </div>
    <div class="test_right" style="float:right; margin-right:40px; margin-top:10px;">
      <p>25분~30분 소요</p>
      <button class="link">검사 실시</button>  
    </div>
  </div>
</div>
 
  <div class="right">
    <h2 style="color:navy">커뮤니티</h2>
    <p>입시정보 서로 공유해봐요</p>
    <div id="community">
      <p class="list">
        <span class="title">대외활동 게시물</span>
        <span class="more">더보기</span>
      </p>
      
      <div id="news">
        
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
      <div id="news">
        
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

export default {
  name: 'HomeMain',
  data(){
    return{
      search:"" //검색정보가 저장되는 데이터
    }
  },
  methods:{
    content:function(){ //검색하면 나오는 정보

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>