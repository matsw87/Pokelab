var express = require('express');
var router = express.Router();
var pokemonDal = require('../model/pokemon_dal');
var typeDal = require('../model/type_dal');

/* GET movies listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get ('/create',function(req, res, next){
    typeDal.GetAll(function(err, type_result){
        console.log(type_result);
        res.render('pokemonFormCreate.ejs', {rs: type_result});
    });

});
router.get('/save', function(req, res, next){


    pokemonDal.Insert(req.query, function (err,result) {
        if (err){
            res.send(err);
        }
        else{
            res.send ("Successfully created a Pokemon!)");
        }
    });
});
module.exports = router;