<template>
   <div id="container">
        <div class="content">
            <div class="tit">
        <h2>아이디 찾기</h2>
        <p>회원님의 정보를 입력하시면 가입한 아이디를 조회하실 수 있습니다.</p>
    </div>
    <div class="login_content">
        <span class="login_input">
            <input type="text" placeholder="이름" style="padding:10px; height:30px; width:300px;" >
           <div class="auth_wrapper">
            <input type="password" placeholder="핸드폰 번호" style="display:block; margin-top:10px; padding:10px; height:30px; width:200px;"
        ><button class="auth_btn">인증</button>
        
    </div>
        <input type="password" placeholder="비밀번호 확인" style="display:block; margin-top:10px; padding:10px; height:30px; width:300px;"
        >
        
        <button class="join_btn" @click="join" style="display:block; margin-top:10px; padding:20px; height:30px; width:324px;">회원가입</button>
        <button class="back" @click="$router.push('/login')" style="margin-top:10px; padding:20px; height:30px; width:324px;"><span>취소</span></button>
        </span>
    </div>
    </div>
    </div>
</template>

<script>
export default {
name:'searchid'
}
</script>

<style>
#container{
    display:flex;
    justify-content: center;
    align-items:center;
    min-height:600px;
    background-color:#f4f5f9;
}
.content .tit{
    position: relative;
    padding:50px 0;
    text-align: center;
}
.login_content{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:0 auto;
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
.auth_wrapper{
   
    display:flex;
    /* align-items: center;
    justify-content: center; */
}
/*.auth{
    /* margin-left:70px; */
    /* margin */
 

.auth_btn{
    margin-left:10px;
    height:54px;
    width:89px;
    margin-top:10px;

    /* margin:1px 0;

    margin-right: 1px;
    width: 100px;
    height:50px;
    font-size: 16px; */

}
</style>