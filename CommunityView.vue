<template>
  <div id="community_pg">
    <div class="community_header">
        <h2>커뮤니티</h2><br>
        <p>현재 재학생 및 졸업생들의 입시 정보를 서로 공유해요</p><br>

        <div class="commu_tab1">
            <ul style="display:flex;">
                <li><h3>대외활동</h3>   </li>       
                <li style="padding:0 12px;"><h3>취업</h3> </li>
            </ul>
        </div>
    </div>
    <!--대외활동 게시판-->
    <div class="board1">
        <div class="board_container">
            <!-- <div class="board_header">
                <div class="row">
                    <div class="column_title">제목
                         </div>
                        <div class="writer">작성자</div>
                            <div class="date">날짜</div>
                                <div class="watch">조회수</div>
                </div>
            </div> -->
            <div class="header">
                
                    <table class="list1">
                        <colgroup>
                            
                            <col style="width:25%">
                           
                            <col style="width:12%">
                            <col style="width:5%">
                            <col style="width:5%">
                        </colgroup>
                       <thead>
                        <tr>
                            <th scope="col">제목</th>
                        
                            <th scope="col">작성자</th>
                            <th scope="col">작성일</th>
                            <th scope="col">조회수</th>
                           
                        </tr>
                       </thead>
                       <tbody>
                        <tr v-for="(board,index) in boardList" :key="index" @click="moveItem(board)">
                            <td>{{board.title}}</td>
                            
                                <td>{{ board.writer }}</td>
                            <td>{{ board.date }}</td>
                            <td>{{ board.viewCount }}</td>
                            
                            
                        </tr>
                       </tbody>
                    </table>

                </div>

        </div>
    </div>
    <!--취업 게시판-->
    <!-- <div class="board2">

    </div> -->
    <div class="text-right" style="width:1100px; margin:0 auto">
         <button class="mt-5" style="float:right" @click="moveWrite">글쓰기</button>
     </div>
  </div>
</template>

<script>
export default {
name:'community',
data(){
    return{
        boardList:[
            {title:"제목제목",writer:"김동아",viewCount:1,date:"2023-05-03"},
            {title:"제목제목",writer:"김동아",viewCount:1,date:"2023-05-03"},
            {title:"제목제목",writer:"김동아",viewCount:1,date:"2023-05-03"},
            {title:"제목제목",writer:"김동아",viewCount:1,date:"2023-05-03"},
            
        ]
    }
},
methods:{
    moveWrite(){
        this.$router.push('/board/write');
    }
}
}
</script>

<style>
#community_pg{
    background:#f4f5f9;
    min-height:1100px;
    /* margin: 0 auto; */
    /* padding: 48px 0; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
     /* 수평 가운데 정렬 */
    /* align-items: center;  */
    /* 수직 가운데 정렬 */
}
.community_header{
    width:1100px;
    position:relative;
    
   margin:0 auto;
    top:50px;
  
 
    

}
.commu_tab1 ul li{
    color:#8e8989;
}
/* 대외활동, 취업에 마우스를 올려두었을 때 ,선택되었을 때*/
.commu_tab1 ul li:hover,
.commu_tab1 ul li:active,
.commu_tab1 ul li.selected{
  color: black;
}

/*--게시판내용--*/
.board1{
    margin-top:90px;
    width:1100px;
    /* flex-direction: column;
    align-items: center; */
   
    margin:0 auto;
}
.board_container{
    position:relative;
    background:white;

    margin-top:100px;
   
} 
.board_header{
   
    line-height: 16px;
    color: #292929;
    font-size: 13px;
    margin: 0 24px;
    padding: 5px 0;
    
    font-weight: 700;

}
.row{
    display: flex;
    align-items: center;
}

.row .column_title{
    flex-basis:auto;
    flex-grow:1;
    min-width:30px;
    width:100px;
}
.row .writer{
    padding:0 12px;
}
.row .date,
.row .watch{
    text-align: center;
}

</style>