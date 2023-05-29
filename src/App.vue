<template>
<div id="app">
  <div id="header">

    <!-- <v-layout> -->
     
      <div id="top">
        <div class="core">
          <ul class="link">
           <li>
            <router-link to="/login">로그인</router-link>
           </li>
           <li>
            <router-link to="/join"> 회원가입</router-link>
           </li>
           <li>
            <router-link to="/mypage">마이페이지</router-link>
           </li>
        </ul>
        </div>
      </div>
    <div id="header-logo">
      <div class="core">
        <h1>
          <router-link to="/" class="logo">커모아</router-link>
        </h1>
        <ul class="menu">
          <li>
            <router-link to="/department">학과비교</router-link>
          </li>
         <li>
          <router-link to="/"> 한눈비교</router-link>
         </li>
        <li>
          <router-link to="/community">커뮤니티</router-link>
        </li>
        </ul>
      </div>
    </div>

  </div>
  <router-view></router-view> 
  <home-footer/>
</div>

</template>

<script>
//import HomeMain from './components/HomeMain.vue'
import HomeFooter from "./components/HomeFooter.vue"
export default {
  components:{
   // HomeMain,homefooter
   HomeFooter
}
};
</script>

<style>

*{
 margin:0;
 padding:0;
 
}

#app{
  margin:0;
  padding:0;
  word-break: break-all;
  /* width:100vw; */
  /* width:1100px; */
  
  /* display:block; */
  /* height: 1000px; */
}
a {
  text-decoration: none;
  color:black;
}
#header{
  height:100px;
  position:relative;
  z-index:16;
  margin:0 auto;
 
  min-width: 1100px;
  box-shadow: 0 2px 6px rgba(0,0,0,.12);
}
#top{
  border-bottom:1px solid #ebecf0;
  height:36px;
 
  
}
#top .core{
  display: flex;
  justify-content: right;
  align-items:center;
  flex-wrap: wrap;
  width:1100px;
  text-align: left;
  margin:0 auto;
  padding:10px 0 0 0;
}
#top .link{
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  /* position: relative; */
  z-index:4;
  word-spacing: 30px;
 
  
}
#top .link li{
  list-style: none;
  padding-left:20px;
 
}

#header-logo{
  height:96px;
}
#header-logo .core{
  width:1100px;
  position: relative;
  margin:0 auto;
  padding:10px 0 0 0;
}
#header-logo h1{
  text-align: center;
  /* padding-top:12px; */
}
#header-logo .logo{
  display: block;
  margin:0 auto;
  width:130px;
  height:40px;
  


}
#header-logo .core .menu{
  position: absolute;
  top:10px;
  left:0;
  padding:10px 0 0 0;
}
#header-logo .core .menu li{
  list-style: none;
}
.header .menu{
    display: flex;
    justify-content: right;
    align-items:center;
    flex-wrap: wrap;
    width:1100px;
    text-align:left;
    margin:0 auto;
 
  
} 
#title{
  /* position: relative; */
    /* margin: 0 auto; */
    /* width: 1000px;
    height: 85px; */
    font-size:40px;
}
/* v-layout{
  display: flex;
  align-items: center;
} */

.menu{
  position:relative;
  display:flex;
  margin-left:auto;
  justify-content:space-between;
}
.menu a{
  margin:0 15px;
}



</style>
