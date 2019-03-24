var express=require("express");
var	app=express();
var	request = require('request');
app.set("view engine", "ejs");

app.get("/map", function(req,res){
	request('http://api.open-notify.org/iss-now.json',function(error,response,body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body);
			res.render("map",{ddata: data});
		}
	});
});
app.get("/details", function(req,res){
	request('http://api.open-notify.org/astros.json',function(error,response,body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body);
			res.render("details",{pdata: data});
		}
	});
});
app.listen(3000, function(){
	console.log("server ON");
});