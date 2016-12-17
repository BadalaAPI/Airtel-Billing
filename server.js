// MEAN Stack RESTful API Tutorial - Contact List App
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('AirtelBilling', ['mapping']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
var pieChart=[]
app.get('/all', function (req, res) {
  console.log('I received a GET request');

	db.mapping.find(function (err, docs) {
	    console.log("done");
	    res.json(docs);
	  });
});
app.get('/AllCu', function(req,res) {
		console.log('I recieved CU request');
		db.mapping.aggregate({
	    $group:{_id:"$Cost Center",MI_charges:{$sum:"$MI"},Tax:{$sum:"$Tax"},TotalDiscount:{$sum:"$Discounts"},RC:{$sum:"$RC"},Roaming:{$sum:"$Raoming"},Total_Bill:{$sum:"$Inv Amount"},totalUsers:{$sum:1}}
		},function(err,docs){
			console.log(docs);
			console.log("AllCu");
			res.json(docs);
		});
});

app.get('/getPieData', function (req, res) {
	console.log('I received a GET request');
	var pie=[];
	db.mapping.aggregate({
	    $group:{_id:"$Cost Center",Total_Bill:{$sum:"$Inv Amount"}}},function(err,docs){
	    	for (var i=0;i<docs.length;i++)
	    	{
	    		pie.push({y:docs[i].Total_Bill,legendText:docs[i]._id.split('-')[1],label:docs[i]._id.split('-')[1]});
	    	}
	    	pieChart=pie;
	    	console.log(pieChart);
	    	res.json(pieChart);
	    });
});

app.listen(3000);
console.log("Server running on port 3000");