var swig  = require('swig');
var login_tpl = swig.compileFile(__dirname+'/login_tpl.html');

exports.init = function(){
    var loginBlock = login_tpl();
    return loginBlock;
}


