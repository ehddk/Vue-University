var express = require('express');
var router = express.Router();

var Password = require('password-encrypt-util');
var password = new Password('mjc801!');

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});
router.post('/join', async function (req, res) {
	console.log(req.body);

	//중복아이디 있는지확인
	var alreadyUser = await User.findOne({
		where: {
			id: req.body.id,
		},
	});
	//같은 아이디로 가입된 사용자가 있는 경우
	if (alreadyUser) {
		res.json({
			result: 'fail',
			message: '이미 가입된 아이디입니다',
		});
		return;
	}

	//비밀번호 암호화
	req.body.password = password.getHashPassword(req.body.password);
	await User.create(req.body);
	res.json({
		result: 'ok',
	});
});

router.post('/login', async function (req, res) {
	console.log(req.body);
	var user = await User.findOne({
		where: {
			id: req.body.id,
			password: password.getHashPassword(req.body.password),
		},
	});
	//사용자가 없는 경우
	if (!user) {
		res.json({
			result: 'fail',
			message: '아이디 또는 비밀번호가 일치하지 않습니다',
		});
		return;
	}
	//로그인 성공
	//Todo:세션에 로그인한 사용자의 정보를 저장
	req.session.user = user;
	res.json({
		result: 'ok',
		user: user, //사용자 정보가 나오도록.
	});
});
router.post('/info', async function (req, res) {
	if (req.session.user) {
		//로그인된 경우
		res.json({
			result: 'ok',
			user: req.session.user,
		});
	} else {
		//로그인 되어있지 않을경우
		res.json({
			result: 'fail',
		});
	}
});
router.post('/logout', async function (req, res) {
	req.session.destroy();
	res.json({
		result: 'ok',
	});
});
module.exports = router;
