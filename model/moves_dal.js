
var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAll = function(callback) {
    connection.query('SELECT * FROM Moves order by Name;',
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


exports.GetByID = function(move_id, callback) {
    console.log(move_id);
    var query = 'SELECT * FROM Moves WHERE ID=' + move_id;
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

/*
exports.GetAble = function(move_id, callback) {
    connection.query('select p.Name as from Pokemon p join Pokemon_Moves pm on pm.Pokemon_ID = p.ID join Moves m on m.ID = pm.Move_ID where m.ID = ' + move_id +';',
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
*/
/* REMOVED GETBYID FOR INFO_VIEW */