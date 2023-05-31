<template>
    <!-- <v-container>
      <input type="text">아이디
      <v-text-field  label="이름"></v-text-field>
      <v-text-field type="password"  label="비밀번호"></v-text-field>
      <v-text-field type="password"  label="비밀번호 확인"></v-text-field>
      <div class="text-center">
        <button class="mr-2" @click="join">회원가입</button>
        <v-btn @click="$router.push('/')" >취소</v-btn>
      </div>
    </v-container> -->
    <!-- <div id="container">
        <div class="content">
            <div class="title">
        <h2>회원가입</h2>
    </div>
    <div class="login_content">
        <span class="login_input">
            <input type="text" placeholder="아이디" style="padding:10px; height:30px; width:300px;" >
         <input type="password" placeholder="비밀번호" style="display:block; margin-top:10px; padding:10px; height:30px; width:300px;"
        >
        <input type="password" placeholder="비밀번호 확인" style="display:block; margin-top:10px; padding:10px; height:30px; width:300px;"
        >
        
        <button class="join_btn" @click="join" style="display:block; margin-top:10px; padding:20px; height:30px; width:324px;">회원가입</button>
        <button class="back" @click="$router.push('/')" style="margin-top:10px; padding:20px; height:30px; width:324px;"><span>취소</span></button>
        </span>
    </div>
    </div>
    </div> -->
    <div id="community_pg">
    <div class="community_header">
        <h2>회원가입</h2><br>
        <p>회원정보를 입력하세요</p><br>

    </div>
    <div class="board1" style="margin-top:40px;">
            
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
                    <input placeholder="이름을 입력해주세요" v-model="user.username">
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>
                    <label class="id"></label>
                    <input placeholder="아이디를 입력해주세요" v-model="user.id">
                  </td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td>
                    <label class="pwd"></label>
                    <input type="password" v-model="user.password">
                  </td>
                </tr>
                <tr>
                  <th>비밀번호 확인</th>
                  <td>
                    <label class="pwdconfirm"></label>
                    <input type="password" v-model="user.passwordConfirm">
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
    <div class="btn1" >
      <button class="joinbtn" @click="join">가입</button>
      <button class="cancel" @click="$router.push('/login')">취소</button>
    </div>
    </div>
   
    
  

</template>

<script>
export default {
    name:'JoinView',
    data(){
        return{
            user:{
                username:'',
                id:'',
                password:'',
                passwordConfirm:''
            }
        }
    },
    methods:{
        join(){
          this.$axios.post("/api/user/join",{
            user:this.user,
          })
          .then((res) => {
            if(res.data.success == true){
              alert("회원가입 완료되었습니다");
              this.$router.push("/")
            }
          })
            if(this.user.id==""){
        alert("아이디를 입력하세요")
        return
      }
      if(this.user.password.length<4){
        alert("비밀번호는 4자리 이상이어야 합니다")
        return
      }
      if(this.user.password != this.user.passwordConfirm){
        alert("비밀번호가 일치하지 않습니다.")
        return
      }
    //   this.$axios.post("/api/user/join",this.user)
    //   .then(result=>{
    //     if(result.data.result=="ok"){
    //       alert("회원가입 완료되었습니다")
    //       this.$router.push("/")
    //     }else{
    //       alert(result.data.message)
    //     }
    //   })
    }
  }
}
</script>

<style>

#container1{
  background:#f4f5f9;
    min-height:1100px;
    
    /* padding: 48px 0; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
     /* 수평 가운데 정렬 */
    /* align-items: center;  */
    /* 수직 가운데 정렬 */

}
.join_btn{
  color:white;
    background:rgb(6, 6, 165);
    border-style:none;
}
.back{
  border:1px solid rgb(6, 6, 169);
    background: white;
    color:rgb(6, 6, 169);
}
.btn1{
  margin:0 auto;
  padding:20px;
}
.joinbtn, .cancel{
  padding:10px 30px;
  margin:10px;
  margin-left:25px;
  
}
.joinbtn{
  color:white;
  background:#6195cd;
  border:0;
}
.cancel{
  border:0;
  background:lightgray;
}
</style>