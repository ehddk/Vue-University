<template>
  <div id="writepg">
    <div class="write_header">
        <h1>글쓰기</h1>
    </div>
    <div class="write_content">
        <div class="write_profile">
            <span class="profil"></span>
            <span class="user_name" style="margin-top:5px;">김동아</span>
        </div>
        <div class="write_title">
            <input type="text" placeholder="제목" class="content_title">
        </div>
        <div class="write_body">
            <textarea class="body_text" placeholder="내용을 입력해주세요"></textarea>
        </div>
        <div class="file">
            <span class="upload"><input type="file" accept="image/*" multiple="multiple"></span>
        </div>
        
    </div>
    <div class="btn">
    <input type="button" value="등록" class="write_btn" @click="submit">
</div>

  </div>
</template>

<script>
export default {
name:'write',
methods:{
    submit(){
        this.$router.push('/community')
    }
}
}
</script>

<style>
#writepg{
    background:#f4f5f9;
    height:100vh;
    
    /* min-height:1100px;  */
    /* margin: 0 auto; */
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
.write_header{
    top:-40px;
    width:1100px;
    position:relative;
    
   margin:0 auto;
    
    margin-bottom:30px;
    
}
.write_header > h1{
    line-height: 40px;
    color: #292929;
    font-size: 35px; 
    /* margin-bottom: 24px; */
    /* font-weight: 700; */
}
.write_content{
    top:-60px;
    width:1100px;
    position:relative;
    padding:20px;
   margin:0 auto;
    box-shadow: 0 2px 6px rgba(0,0,0,.06);
    margin-top:60px;
    height:400px;
    border-radius:12px;
    background-color:#fff;
   
    max-width:1100px;
    
}
.write_profile{
    display: flex;
    margin-bottom: 12px;
}
.profil{
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    margin-right: 6px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-image:url("https://cf-uup.univ100.kr/0.png");
}
.content_title{
    border:0;
    /* border-bottom:1px solid lightgray;
    width:500px; */
    line-height: 24px;
    color: #292929;
    font-size: 18px;
    margin-bottom: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #ddd;
    border-radius: 0;
    font-weight: 700;
    outline:0;
    width:90%;
}
.body_text{
    
    line-height: 24px;
    color: #292929;
    font-size: 15px;
    margin-top:15px;
    margin-bottom: 6px;
    height: 180px;
    width:90%;
}
.btn{
    
    
    display: flex;
    justify-content: flex-end;
    width:1100px;
    position:relative;
    
   margin:0 auto;
}
.write_btn{
    padding: 10px 36px;
    border-radius: 6px;
    border:0;
    height: 40px;
    color: #fff;
    font-weight: 700;
    background-color: #6195cd;
    cursor: pointer;

    
}
</style>