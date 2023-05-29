<template>
  <div style="background:#f4f5f9;">
    <div id="content" >
      <div class="depart_content">
     <div class="lnb">
      <div class="lnb_title">마이페이지</div>
      <ul id="menus">
            <li>
              <router-link to="/save">관심 대학/학과</router-link>
            </li>
            <li>
              학교 인증
            </li>
            <li>
              <router-link to="/mypage">개인정보</router-link>
            </li>
          </ul>
     </div>
      
      <div id="bodycontent">
        <div class="detail">
          <div class="detail_title">
            <h2>개인정보</h2>
          </div>
          <div class="table" style="padding:10px">
            <h2>회원정보 수정</h2>
            <table class="table_member" style="width:100%;  ">
              <colgroup>
                <col width="20%">
                <col width="80%">
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>
                    <label class="name"></label>
                    <input placeholder="이름을 입력해주세요">
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>
                    <label class="name"></label>
                    <input placeholder="">
                  </td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>
                    <label class="email"></label>
                    <input type="text" class="email1" style="width:100px;">@ <input type="text" class="email2" ref="email2Input">
                    <label class="name">이메일 종류</label>
                    <select id="emailsel" title="이메일 선택" ref="emailSelect" @change="updateEmail">
                      <option selected>직접입력</option>
                      <option>naver.com</option>
                      <option>gmail.com</option>
                      <option>hanmail.net</option>
                    </select>
                    
  
                  </td>
                </tr>
                <tr>
                  <th>핸드폰 번호</th>
                  <td>
                    <label class="name"></label>
                    <input placeholder="하이픈(-)을 제외하고 입력해주세요">
                  </td>
                </tr>
                <tr>
                  <th>학교정보</th>
                  <td>
                    <label class="name"></label>
                    <input placeholder="학교명을 입력해주세요"><button class="searchsch" style="padding:5px; margin-left:5px; color:white; background:navy; border:0;">학교 검색</button>
                  </td>
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


export default{
  name:'mypage',
  methods:{
    //이메일 선택시 자동입력 되게함.
    updateEmail(event){
      const selectedEmail = event.target.value;
      const email2Input = this.$refs.email2Input;

      if(selectedEmail !== "직접입력"){
        email2Input.value = selectedEmail;
      }else{
        email2Input.value = "";
      }
    }
  }
}
</script>

<style>
.depart_content{
  display:flex;
}
#content {
  position: relative;
  margin: 0 auto;
  width: 1100px;
  height: 100%;
  min-height: 1000px;
}
.lnb{
  position: absolute;
    top: 0px;
    left: 0px;
    width: 210px;
    height:100%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.lnb_title{
  height: 61px;
    font: 22px "맑은 고딕", Malgun Gothic, NanumGothic, dotum, sans-serif;
    color: #222;
    letter-spacing: -1px;
    font-weight: 600;
    padding: 19px 0 0 10px;
}
#content .detail{
  min-height: 600px;
    margin: 10px 0 70px 245px;
    padding: 5px 0;
}
.detail .detail_title{
  position: relative;
    height: 69px;
    border-bottom: 1px solid #6d6e71;
    /* margin-top: 16px; */
    margin-top: 10px;
    display: inline-block;
    width: 100%;
}
/* #content .mypage {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
  width: 100%;
  height: 100px;
  padding-bottom: 10px;
} */

#mypg_content {
  position: relative;
  top: 0;
  left: 0;
  width: 200px;
  margin: 0;
  padding: 10px;
}
#bodycontent{
  margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    vertical-align: baseline;
    background:#f4f5f9;
}




#menus li {
  display: block;
  height: 32px;
  border-top: 1px solid #ddd;
  padding: 10px 0 0 32px;
  font: 16px "맑은 고딕", Malgun Gothic, NanumGothic, dotum, sans-serif;
  color: #666;
  letter-spacing: -1px;
}

.sidebar {
  margin: 0;
  padding: 10px;
}

.table{
  position:relative;
  font:12px;
}
.table_member{
  border: 2px solid #969696;
  /* border:1px solid lightgray; */
}
tbody{
  display: table-row-group;
}
col{
  display: table-column;
}
/* #bodycontent .profile {
  min-height: 600px;
  margin: 10px;
  padding: 40px;
  border: 1px solid red;
} */
tr{
  display: table-row;
  border-bottom:#969696;
}
.table_member th{
  border-right:1px solid #969696;
  padding:10px 0 15px 20px;
  background-color:#eeee;
  border-bottom:1px solid #969696;
  text-align: left;
  
  
}
td{
  padding-left: 10px;
    border-bottom: 1px solid #969696;
    border-right: 1px solid #ccc;
    color: #333;
    text-align: left;
    vertical-align: middle;
}
.name{
  position:absolute;
  width:0;
  height:0;
  font-size:0;
  overflow:hidden;
}

.table_member input{
  width: 180px;
    height: 28px;
    border: 1px solid #ddd;
    font-size: 12px;
    color: #333;
    padding-left: 5px;
}
#emailsel{
  width: 150px;
    height: 32px;
    border: 1px solid #ddd;
    font-size: 12px;
    color: #333;
    margin-left: 10px;
    line-height: 24px;
}
</style>
