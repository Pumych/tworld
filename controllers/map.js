var map = require('../views/map');


exports.get = function(req, res){
    var mapDraw = map.draw;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(
        template.build( "Map", "", mapDraw )
    );
    res.end();
}