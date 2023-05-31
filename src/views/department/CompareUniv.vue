<template>
  <div id="content">
    <div class="content_header">
        <h2>대학 비교</h2>
    </div>
    <div class="univ_body " style="background:white">
        <div class="univ_header">
            <span style="display:flex">
                <p>모집시기</p>
                <button style="margin-left:20px;">검색</button>
            </span>
            
        </div>
        <div class="univ_content">
            <table class="univ_table">
                <colgroup>
                    <col style="width:200px">
                    <col style="width:200px">
                    <col style="width:200px">
                    <col style="width:200px">
                </colgroup>
                <thead style="background:lightgray;">
                    <tr >
                        <th scope="col" style="padding:20px;">카테고리</th>
                        <th scope="col">대학교명</th>
                        <th scope="col">대학교명</th>
                        <th scope="col">대학교명</th>
                    </tr>
                </thead>
                <tbody > 
                    <tr>
                        <td style="padding:30px;">전형 유형</td>
                        <td v-for="(list,index) in List" :key="index"></td>
                    </tr>
                    <tr>
                        <td style="padding:30px;">졸업 필수 학점</td>
                    </tr>
                    <tr>
                        <td style="padding:30px;">주간 / 야간</td>
                    </tr>
                    <tr>
                        <td style="padding:30px;">남녀 성비</td>
                    </tr>
                    <tr>
                        <td style="padding:30px;">전공심화 여부</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'compareuniv',
    data(){
        return{
            List:[
                
            ]
        }
    }
}
</script>

<style>
body{
    background:#f4f5f9;
}
.content_header{
    padding:15px;
}
.univ_body{
    margin-top:50px;
    height:auto;
}
.univ_table {
    border:1px solid #ababab;
}
.univ_table th{
    border-bottom:1px solid #ababab;
  
}
colgroup{
    display: table-column-group;
  
}
col{
    display: table-column;
}

</style>