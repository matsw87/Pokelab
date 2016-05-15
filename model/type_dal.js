var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback){
    var qry = "SELECT * from types;"
    connection.query(qry, function(err, result){
        callback(err, result);
    });
}

exports.GetByName = function(type, callback) {
    console.log(type);
    var query = 'SELECT * FROM types WHERE Type=' + state_id;
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