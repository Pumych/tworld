var swig  = require('swig');
var main_page_tpl = swig.compileFile(__dirname+'/main_page_tpl.html');

exports.init = function(title, content){
    var mainPageOutput = main_page_tpl({
        title: title,
        pagetitle: '',
        content: content
    });

    return mainPageOutput;
}