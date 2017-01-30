/**
 * Created by HP on 2017/1/30.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('我是导出的');
});

module.exports = router;