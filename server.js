// server.js  
var express = require('express'),
        app = express(),
        http = require('http').createServer(app),
        port = 3000;

app.get('EngieeringFound', function (req, res, next) { res.redirect(301, 'https://www.actian.com/company/careers/'); });
   
http.listen(port, function () { console.log('open positions for a department with appropriate http status code ...... App running & listening on port ' + port); });


