/**
 * Created by student on 5/11/16.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('auth_required');
});

module.exports = router;
