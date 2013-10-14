var main_page = require('../views/main_page');
var login_block = require('../views/login_block');

var pageTitle = 'TWorld';
var pageContent = login_block.init();

exports.get = function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(main_page.init(pageTitle, pageContent));
    res.end();
}

