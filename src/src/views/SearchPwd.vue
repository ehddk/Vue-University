<template>
   <div id="container">
        <div class="content">
            <div class="tit">
        <h2>비밀번호 찾기</h2>
        <p>본인 확인을 위해 회원가입시의 정보를 입력합니다.</p>
    </div>
    <div class="login_content">
        <span class="login_input">
            <input type="text" placeholder="아이디" style="padding:10px; height:30px; width:300px;" >
            <input type="text" placeholder="이름" style="display:block; margin-top:10px;padding:10px; height:30px; width:300px;" >
           <div class="auth_wrapper">
            <input type="text" pattern="[0-9()-]+" maxlength="11" title="핸드폰 번호는 11자리까지만 입력 가능합니다" placeholder="전화번호를 입력해주세요" 
 style="display:block; margin-top:10px; padding:10px; height:30px; width:200px;"
        ><button class="auth_btn">인증</button>
        
    </div>
        <input type="text" placeholder="인증번호" style="display:block; margin-top:10px; padding:10px; height:30px; width:300px;"
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
name:'searchpwd'
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
</style>