var express = require('express');
var router = express.Router();
var movesDal = require('../model/moves_dal');

router.get('/all', function(req, res) {
    movesDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayAllMoves.ejs', {rs: result});
        }
    );
});


router.get('/', function (req, res) {
    console.log('move_id: ' + req.query.move_id);
    movesDal.GetByID(req.query.move_id, function (err, result) {
            if (err) throw err;

            res.render('displayMoveInfo.ejs', {rs: result, move_id: req.query.move_id});
        }
    );
});

module.exports = router;