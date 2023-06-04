var express = require('express');
var router = express.Router();
const Pager = require('node-jyh-pager');
let pager = new Pager({
	itemPerPage: 10, //한 페이지에 몇개씩?
	pageCount: 5, //밑에 보여지는 페이지 갯수
});
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});
router.post('/community', function (req, res) {
	var list = [
		{ boardNo: 1, title: '제목1', writer: '김동아', viewCount: 1, writeDate: '2023-05-09' },
		{ boardNo: 1, title: '제목1', writer: '김동아', viewCount: 1, writeDate: '2023-05-09' },
		{ boardNo: 1, title: '제목1', writer: '김동아', viewCount: 1, writeDate: '2023-05-09' },
		{ boardNo: 1, title: '제목1', writer: '김동아', viewCount: 1, writeDate: '2023-05-09' },
		{ boardNo: 1, title: '제목1', writer: '김동아', viewCount: 1, writeDate: '2023-05-09' },
	];
	res.json(list);
});
router.post('/board/write', async function (req, res) {
	console.log(req.body);
	//로그인이 되어있을때만 글이 써지도록.
	if (!req.session.user) {
		res.json({
			result: 'fail',
			message: '로그인이 필요합니다',
		});
		return;
	}
	//디비에 저장
	var result = await univ.create(req.body);

	res.json({
		result: 'ok',
		item: result,
	});
	//로그인된 경우에만 실행
	req.body.userId = req.session.user.id;
});
module.exports = router;
