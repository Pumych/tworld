var swig  = require('swig');
var mainPage_tpl = swig.compileFile(__dirname+'/../views/mainpage_tpl.html');
var formLogin_tpl = swig.compileFile(__dirname+'/../views/login_tpl.html');

var loginOutput =  formLogin_tpl();
var mainPageOutput = mainPage_tpl({
    title: 'T-World',
    pagetitle: '',
    content: loginOutput
});

exports.get = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(mainPageOutput);
    res.end();
}


console.log(formLogin_tpl);
//    var formLogin = form_login.draw;
//var template = require('../views/template-main');
//var form_login = require('../views/form-login');
//    res.write(
//        template.build(
//            "T-World","",formLogin
//        )
//    );