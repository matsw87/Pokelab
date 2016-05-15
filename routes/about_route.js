var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('displayAbout.ejs');

});



module.exports = router;