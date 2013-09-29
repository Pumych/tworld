exports.build = function(title, pagetitle, content) {
    return ['<!doctype html>',
        '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
        '<link rel="stylesheet" href="/assets/reset.css" />\n</head>',
        '<link rel="stylesheet" href="/assets/style.css" />\n</head>',
        '<script type="text/javascript" src="/assets/jquery-2.0.0.js"></script>',
        '<script type="text/javascript" src="/assets/script.js"></script>',
        '<body id="login_page"><h1>{pagetitle}</h1>',
        '<div id="content">{content}</div>\n</body>\n</html>'
    ].join('\n')
        .replace(/{title}/g, title)
        .replace(/{pagetitle}/g, pagetitle)
        .replace(/{content}/g, content);
}
