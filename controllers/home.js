var template = require('../views/template-main');
var form_login = require('../views/form-login');

exports.get = function(req, res){
    var formLogin = form_login.draw;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(
        template.build(
            "T-World","",formLogin
        )
    );

    res.end();

}
