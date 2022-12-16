const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || "dev"; // 지정된 환경변수가 없으면 'development'로 지정

const User = require('./user');
const Comment = require('./comment');
const SysDiction = require('./sysDiction'); 
const Menu = require('./menu'); 
 
//console.log(env);
// config/config.json 파일에 있는 설정값들을 불러온다.
// config객체의 env변수(development)키 의 객체값들을 불러온다.
// 즉, 데이터베이스 설정을 불러온다고 말할 수 있다.
const config = require("../config/config.js")[env];
 
const db = {};
 
// new Sequelize를 통해 MySQL 연결 객체를 생성한다.
const sequelize = new Sequelize(config.database, config.username, config.password, config)
db.sequelize = sequelize; 
 
// 모델 클래스를 넣음.
db.User = User;
db.Comment = Comment;
db.SysDiction = SysDiction;
db.Menu = Menu;
 
// 모델과 테이블 종합적인 연결이 설정된다.
User.init(sequelize); 
Comment.init(sequelize);
SysDiction.init(sequelize);
Menu.init(sequelize);
 
// db객체 안에 있는 모델들 간의 관계가 설정된다.
User.associate(db);
Comment.associate(db);
//SysDiction.associate(db);
 
// 모듈로 꺼낸다.
module.exports = db;