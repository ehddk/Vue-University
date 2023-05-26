<template>
  <div style="background:#f4f5f9; min-height:1100px;">
    <div id="content">
      <div id="bodycontent">
        <div class="detail1">
         <div class="search_de">
            <div class="depart-container">
                <h3 style="color:navy;">대학명</h3>
            <select id="depart" title="학과 검색" ref="departselect" @change="update">
                      <option selected>직접입력</option>
                      <option>naver.com</option>
                      <option>gmail.com</option>
                      <option>hanmail.net</option>
                    </select>
                <p>초기화 버튼</p>
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
            </div>
         
         </div>
         <div id="btn" style="">
          <button class="save_btn">검색</button>
         </div>
         
        </div>
      </div>
      <div id="search_content">
        <h3>전체</h3>
        <div class="departs">
          <div class="one" @click="movePage">
          <p>건축/설비공학과</p>
        </div>
        <div class="two">
          <p>건축/설비공학과</p>
        </div>
        <div class="two">
          <p>건축/설비공학과</p>
        </div>
        <div class="two">
          <p>건축/설비공학과</p>
        </div>
        <div class="thr_1">
          <p>건축/설비공학과</p>
        </div>
        <div class="thr">
          <p>건축/설비공학과</p>
        </div>
        <div class="thr">
          <p>건축/설비공학과</p>
        </div>
        <div class="thr">
          <p>건축/설비공학과</p>
        </div>
        <div class="four_1">
          <p>건축/설비공학과</p>
        </div>
        <div class="four">
          <p>건축/설비공학과</p>
        </div> 
        <div class="four">
          <p>건축/설비공학과</p>
        </div>
        <div class="four">
          <p>건축/설비공학과</p>
        </div>
        </div>
        
      </div>
    </div>
  </div>

</template>

<script>
export default {
name:'department',
data() {
    return {
        //체크한 내용이 배열에 들어오게 됨.
      checkedValues:[],
      
    };
  },
  methods:{
    //중복체크 방지
    clickFunc(event){
        for(let i=0;i<this.checkedValues.length;i++){
            if(this.checkedValues[i] !== event.target.value){
                console.log(this.checkedValues[i]);
                this.checkedValues.splice(i,1);
            }
        }
    },
    movePage(){
      this.$router.push('/department/departcontent')
    }
  }
}
</script>

<style>
#content {
  position: relative;
  margin: 0 auto;
  width: 1100px;
  height: 100%;
  min-height: 600px;
}
.search_de{

    background: white;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 872px;
  
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
.save_btn{
    position:absolute;
   padding:5px 30px;
    top:34%;
 left:46%;
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
#btn{
  
}
/*학과 div */
.one, .two, .thr, .thr_1, .four_1, .four{
  width:200px;
  height:70px;
  background:lightgray;
  display: inline-block;
}
#search_content p{
  font-size:15px;
  text-align: center;
  /* vertical-align: middle; 얘는 주로 inline속성에서 쓰임!p태그는 block 속성이라 적용안됨 */
  padding-top:25px;
  /* line-height:80px; */
}
.two{
  margin-left:20px;
}
.thr{
 margin-top:20px;
 margin-left:20px;
}
.four{
  margin-top:20px;
  margin-left:20px;
}
</style>