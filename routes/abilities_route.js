var express = require('express');
var router = express.Router();
var abilitiesDal = require('../model/abilities_dal');

router.get('/all', function(req, res) {
    abilitiesDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayAllAbilities.ejs', {rs: result});
        }
    );
});


router.get('/', function (req, res) {
    console.log('abilities_id: ' + req.query.abilities_id);
    abilitiesDal.GetByID(req.query.abilities_id, function (err, result) {
            if (err) throw err;

            res.render('displayAbilitiesInfo.ejs', {rs: result, abilities_id: req.query.abilities_id});
        }
    );
});

module.exports = router;