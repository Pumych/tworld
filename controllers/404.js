var main_page = require('../views/main_page');

var pageTitle = '404';
var pageContent = '404 - Does it right page?';

exports.get = function(req, res) {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write(main_page.init(pageTitle, pageContent));
    res.end();
}
