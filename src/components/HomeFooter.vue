<template>
	<div class="foot">
		<div class="foot_info">
			<div class="foot_link">
				<ul style="display: flex; padding: 20px 0 0 0px">
					<h3>커모아</h3>
					<li>개인정보처리방침</li>
					<li>문의하기</li>
					<li>공지사항</li>
					<li>서비스이용약관</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'homefooter',
};
</script>

<style>
.foot {
	background: rgb(198, 211, 219);
	/* position: fixed; */
	bottom: 0;
	left: 0;
	right: 0;
	/* width: 1100px; */
	height: 100px;
	display: flex;
}
.foot_info {
	align-content: center;
	margin: 0 auto;
}
/* h1{

    width:100%;
    height:200px;
background:navy;
 
} */
.foot li {
	margin-left: 20px;
}
</style>
