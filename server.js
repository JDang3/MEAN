var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('EDD_DB', ['NavBarData', 'MarketDomainData', 'ServiceData']);
var bodyParser = require('body-parser');

// app.get('/', function(req, res) {
// res.send("Hello World from server.js")
// });

app.use(express.static(__dirname + "/Eikon"));
app.use(bodyParser.json());

// Create GetService for Angular: NavBarData
app.get('/NavBarData', function (req, res) {
	console.log("I received a get Req: NavBarData")
	db.NavBarData.find(function (err, docs) {
		// console.log(docs);
		res.json(docs);
	});
	
}

	);

// Create GetService for Angular: MarketDomainData
app.get('/MarketDomainData', function (req, res) {
	console.log("I received a get Req: MarketDomainData")
	db.MarketDomainData.find(function (err, docs) {
		// console.log(docs);
		res.json(docs);
	});
	
}

	);

// Create GetService for Angular: ServiceData
app.get('/ServiceData', function (req, res) {
	console.log("I received a get Req: ServiceData")
	db.ServiceData.find(function (err, docs) {
		// console.log(docs);
		res.json(docs);
	});
	
}

	);








app.listen(4000);
console.log("server running on port 4000");
