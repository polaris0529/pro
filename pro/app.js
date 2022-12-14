const express = require('express');
const session = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require("body-parser"); 
// index.js에 있는 db.sequelize 객체 모듈을 구조분해로 불러온다.
const { sequelize } = require('./models');
const router = require('./routes/routes.js');
const app = express();

sequelize.sync({ force: false })
   .then(() => {
      console.log('데이터베이스 연결됨.');
   }).catch((err) => {
      console.error(err);
   });
 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(morgan('dev')); // 로그
app.use(express.static(path.join(__dirname, 'public'))); // 요청시 기본 경로 설정
app.use(express.json()); // json 파싱
app.use(express.urlencoded({ extended: true })); // uri 파싱

app.use(session({
   secure: true,	// https 환경에서만 session 정보를 주고받도록처리
   secret: process.env.COOKIE_SECRET, // 암호화하는 데 쓰일 키
   resave: false, // 세션을 언제나 저장할지 설정함
   saveUninitialized: true, // 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
   cookie: {	//세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
     httpOnly: true, // 자바스크립트를 통해 세션 쿠키를 사용할 수 없도록 함
     Secure: true
   },
   name: 'session-cookie' // 세션 쿠키명 디폴트값은 connect.sid이지만 다른 이름을 줄수도 있다.
 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.set('port', process.env.PORT || 8080);
//+) express 4.16.0버전 이후에는 bodyParser의 기능 일부가 express에 포함되었기 때문에 아래 코드처럼 사용해도 된다. ({ extended: true }));

 
// 일부러 에러 발생시키기 TEST용
// app.use((req, res, next) => {
//    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
//    error.status = 404;
//    next(error);
// });

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
   // 템플릿 변수 설정
   res.locals.message = err.message;
   res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; // 배포용이 아니라면 err설정 아니면 빈 객체
 
   res.status(err.status || 500);
   res.render('error'); // 템플릿 엔진을 렌더링 하여 응답
});

 
// 서버 실행
app.listen(app.get('port'), () => {
   console.log(app.get('port'), '번 포트에서 대기 중');
});