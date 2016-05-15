var express = require('express');
var router = express.Router();
var pokemonDal = require('../model/pokemon_dal');

router.get('/all', function(req, res) {
    pokemonDal.GetAll(function (err, result) {
            if (err) throw err;
            res.render('displayAllPokemon.ejs', {rs: result});
        }
    );
});


router.get('/', function (req, res) {
    console.log('pokemon_id: ' + req.query.pokemon_id);
    pokemonDal.GetByID(req.query.pokemon_id, function (err, result) {
            if (err) throw err;

            res.render('displayPokemonInfo.ejs', {rs: result, pokemon_id: req.query.pokemon_id});
        }
    );
});

module.exports = router;