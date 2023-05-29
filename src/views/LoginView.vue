<template>
    <div id="container">
        <div class="content">
            <div class="title">
        <h2>로그인</h2>
    </div>
    <div class="login_content">
        <span class="login_input">
            <input type="text" placeholder="아이디" style="padding:10px; height:30px; width:300px;" v-model="user.id">
         <input type="password" placeholder="비밀번호" style="display:block; margin-top:10px; padding:10px; height:30px; width:300px;" v-model="user.password">
        
        <button class="log_btn" @click="login" style="margin-top:10px; padding:20px; height:30px; width:324px;"><span>로그인</span></button>
        <button class="join_btn" @click="join" style="display:block; margin-top:10px; padding:20px; height:30px; width:324px;">회원가입</button>
        </span>
    </div>
    <div class="save">
        <div class="id_save">
            
            <ul class="find">
                <li>
                    <router-link to="/searchid">아이디 찾기</router-link>
                </li>
                <li>
                    <router-link to="/searchpwd">비밀번호 찾기</router-link>
                </li>
            </ul>
            <div class="sns_login">
        <button class="naver">네이버 로그인</button>
        <button class="kakao">카카오 로그인</button>
    </div>
        </div>
        
    </div>
        </div>
        
    

    </div>

</template>

<script>
export default {
    data(){
        return{
            user:{
                id:'',
                password:''
            }
        }
    },
    methods:{
        login:function(){
            this.$axios.post("/api/user/login",this.user)
            .then(result=>{
                if(result.data.result == "ok"){
                    console.log(result.data.user)
                    this.$store.commit("setLoginUser",result.data.user)
                    alert("로그인 성공")
                    this.$router.push("/") // 메인 홈페이지로 이동.
                }
            })
        },
        join:function(){
            this.$router.push("/join")
        }
    }
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

.content .title{
    position: relative;
    padding:50px 0 55px 0;
    text-align: center;
}
.content .title h2{
    font-size:34px;
    color:black;
    font-weight: 500;
}
.login_content{
    display: block;
    margin:0 auto;
}
.log_btn{
    color:white;
    background:rgb(6, 6, 165);
    border-style:none;
}
.join_btn{
    border:1px solid rgb(6, 6, 169);
    background: white;
    color:rgb(6, 6, 169);
}
.save{
    margin-top:10px;
}
.id_save{
    display: block;
    position: relative;
}

.save .id_save .find{
    display: inline-block;
    float:right;
    margin-top:5px;
}

.save .id_save .find li{
    list-style: none;
    display: inline-block;
    font-size:10px;
    margin-left:25px;
    
    /* position: relative;
    font-size:10px;
    margin-left:55px; */
}
.sns_login{
   margin:40px 50px;
    
    position:absolute;
    display: inline-block;
}
.naver{
    padding:5px 10px;
}
.kakao{
    margin-left:30px;
    padding:5px 10px;
}
/* .sns_login button{
    text-align: center;
} */
</style>