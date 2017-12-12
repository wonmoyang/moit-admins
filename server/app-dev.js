var express = require('express');
var app = express();

// parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// logger
var morgan = require('morgan');
app.use(morgan('dev'));

// db
// var db_infos = require('./db_infos');
// var db = require('mongoose');

// Angular
app.use('/', express.static(__dirname + "./../client/dist"));


app.get('/api/crawler', function (req, res) {
	var request = require('request');
/*	
	var client_id = 'T17aCg_n_IdecgDIDb1W';
	var client_secret = '6qhTZKGzPj';
	
	   var api_url = 'https://openapi.naver.com/v1/search/blog?query=%EB%9F%AC%EB%B8%94%EB%A6%AC%EC%A6%88'; // json 결과
	   var options = {
	       url: api_url,
	       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
	    };
	   request.get(options, function (error, response, body) {
	     if (!error && response.statusCode == 200) {
	       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
	       res.end(body);
	     } else {
	       res.status(response.statusCode).end();
	       console.log('error = ' + response.statusCode);
	     }
	   });
	*/
});

// API routes
	// only for example
	// require('./api/routes/todo.routes.js')(app); 

app.listen(3000, function () {
  console.log('listening on port 3000...');
});