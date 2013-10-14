var users_data = require('../model/users-data');
var messages = require('../model/messages');

messages = messages.getMsg();

exports.get = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/json'});
    var username = req.requrl.query.user;
    var password = req.requrl.query.pass;
    var email = req.requrl.query.email;
    var userData = {
        username: username,
        password: password,
        email: email
    }

    users_data.user_exists(username, email, function(userExists){
        if(userExists){
            res.write('{userEmailExists: ' + userExists + ', errMsg: "'+messages.userExists+'"}');
        } else {
            console.log('userData: ', JSON.stringify(userData));
            users_data.user_registration(userData, function(err){

            })
        }


    })
    res.end();

}