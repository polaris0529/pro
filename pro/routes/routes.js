var router = require('express').Router();
//var router = express.Router();
const index = require('./router.index');
const users = require('./router.users');

router.use('/user' , users);
router.use('/',index);

module.exports = router;