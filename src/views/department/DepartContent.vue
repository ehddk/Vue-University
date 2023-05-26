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
                <li class="tab_1">학과 개요</li>
                <li class="tab_2"> </li>
            </ul>
        </div>
        <div class="depart_tab">
           
            <h2>학과소개</h2>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
name:'departcontent'
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
    background: white;
    margin:0 0 0 20px;
    /* margin:80px auto; */
    /* padding:20px; */
    width:1100px;
}
.two_tabs {
  margin: 80px 20px 0 20px;
  width: 1100px;
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
    background:#e6cd12;
    color:black;
}
.tab_2{
 float:left;
 padding:5px 50px 0;
 letter-spacing: -1px;
 background:#b4b4b4
}

</style>