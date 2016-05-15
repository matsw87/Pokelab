
var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM Pokemon;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.Insert = function(pokemon_info, callback) {

    console.log(pokemon_info);

    var dynamic_query = 'INSERT INTO Pokemon (Name, Description, HP, Attack, Defense, Special_Attack, Special_Defense, Speed, Sprite, Type) VALUES (' +
        '\'' + pokemon_info.name + '\', ' +
        '\'' + pokemon_info.description + '\',' +
        pokemon_info.hp + ',' +
        pokemon_info.attack + ',' +
        pokemon_info.defense + ',' +
        pokemon_info.special_attack + ',' +
        pokemon_info.special_defense + ',' +
        pokemon_info.speed + ',' +
        '\'' + pokemon_info.sprite + '\',' +
        '\'' + pokemon_info.type + '\'' +
        ');';

    console.log("test");
    console.log(dynamic_query);

    connection.query(dynamic_query,
        function (err, result) {

            if(err) {
                console.log(err);
                callback(true);
                return;
            }

            callback(false, result);
        }
    );
}

exports.GetByID = function(pokemon_id, callback) {
    console.log(pokemon_id);
    var query = 'SELECT * FROM pokemon_moves_view WHERE ID=' + pokemon_id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetByID = function(pokemon_id, callback) {
    console.log(pokemon_id);
    var query = 'SELECT * FROM pokemon_moves_view WHERE ID=' + pokemon_id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


/* REMOVED GETBYID FOR INFO_VIEW */