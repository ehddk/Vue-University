function init(Sequelize, connection) {
	console.log(connection);
	/** */
	global.Board = connection.define('board', {
		boardNo: {
			type: Sequelize.INTEGER,
			primaryKey: true, //게시물 번호가 기본키가 됨.
			autoIncrement: true, //자동증가
		},
		title: {
			type: Sequelize.STRING,
		},
		writer: {
			type: Sequelize.STRING,
		},
		body: {
			type: Sequelize.TEXT,
		},
		viewCount: {
			type: Sequelize.INTEGER,
			defaultValue: 0, //처음 조회수는 0으로 지정.
		},
		writeDate: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW, //현재 시간이 자동으로 들어가게
		},
	});
	global.User = connection.define('user', {
		id: {
			type: Sequelize.STRING,
			primaryKey: true,
		},
		password: {
			type: Sequelize.STRING,
		},
		name: {
			type: Sequelize.STRING,
		},
		joinDate: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
		},
	});
	//board라는 모델과 user 모델의 관계를 정의해주자.
	Board.belongsTo(User, {
		as: 'user',
		foreignKey: 'userId',
	});
	User.hasMany(Board, {
		as: 'boards',
		foreignKey: 'userId',
	});
	connection.sync({
		// force:true -> 할때마다 테이블을 지우고 다시 시작하게됨.
		alter: true, //수정한 부분만 다시 실행되도록.
	});
}

module.exports = init;
