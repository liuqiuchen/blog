/**
 * Created by HP on 2017/1/30.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {title: '这是首页'});
});
router.get('/register', function (req, res, next) {
   res.render('register', {title: '注册'});
});
router.get('/login', function (req, res, next) {
    res.render('login', {title: '登录'});
});
router.get('/loginout', function (req, res, next) {
    res.send('退出登录');
});

module.exports = router;