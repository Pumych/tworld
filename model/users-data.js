var mongo = require('mongodb'),
    Server = mongo.Server,
    Db = mongo.Db;
var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('tworld', server, {safe: false});

var onErr = function(err,callback){
    db.close();
    callback(err);
};

// Callbacks TRUE if username or email exists in collection 'users', otherwise callbacks FALSE
exports.user_exists = function(username, email, callbackExists){
    db.open(function(err, db){  // Open DB connection
        if(err) onErr(err, callback);
        db.collection('users', function(err, collection){   // Set 'users' collection
            if(err) onErr(err, callback);
            collection.find({Username: username}).toArray(function(err, data){  // Find documents with username
                if(err) throw err;
                console.log('DATA: ' + JSON.stringify(data));
                console.log('docs.length: ' + data.length);
                if(data.length > 0){
                    db.close();
                    console.log('Username "'+username+'" found in ', data);
                    callbackExists(true);
                } else {
                    collection.find({Email: email}).toArray(function(err, data){    // Find documents with email
                        if(err) throw err;
                        console.log('DATA: ' + JSON.stringify(data));
                        console.log('docs.length: ' + data.length);
                        if(data.length > 0){
                            db.close();
                            console.log('Email "'+email+'" found in ', data);
                            callbackExists(true);
                        } else {
                            callbackExists(false);
                            console.log('User/Email doesn\'t exists in DB');
                        }
                    });
                }
            })
        });
    });
}

// Registering new user in DB
exports.user_registration = function(data){

}
