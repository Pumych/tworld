var url = require('url');   // Import 'url' module
var fs = require('fs');     // Import 'fs' module

exports.get = function(req, res){   // Exporting a function called “get” – this allows our server file to use this function, passing the request and response objects through
    req.requrl = url.parse(req.url, true);
    var path = req.requrl.pathname;         // Getting the path of the URL request
    if(/.(css)$/.test(path)){   // Testing to see whether the request is for a CSS file and loading it in if so
        res.writeHead(200, {'Content-Type': 'text/css'});
        fs.readFile(__dirname + path, 'utf8', function(err, data){
            if(err) throw err;
            res.write(data, 'utf8');
            res.end();
        });
    } else if(/.(js)$/.test(path)){
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        fs.readFile(__dirname + path, 'utf8', function(err, data){
            if(err) throw err;
            res.write(data, 'utf8');
            res.end();
        });
    } else {
        switch(path){
            case '/':
            case '/home':
                require('./controllers/home').get(req, res);
                break;
            case '/registration':
                require('./controllers/registration').get(req, res);
                break;
            default:
                require('./controllers/404').get(req, res);
                break;
        }
//        if(path === '/' || path === '/home'){
//            require('./controllers/home').get(req, res);
//        } else if(path === '/registration') {
//            require('./controllers/registration').get(req, res);
//        } else {
//            require('./controllers/404').get(req, res);
//        }
    }
}
