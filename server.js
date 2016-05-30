"use strict"
// server libaries
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// gpio libary for talking to raspberry pi which this server is hosted on
var Gpio = require('onoff').Gpio;

// app settings
var led = new Gpio(14, 'out');
var appPort = 9999;

app.use(express.static('app'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.post('/led', function(req, res){
	var toggleCommand = req.body.command;

	(toggleCommand === 'on') ? led.writeSync(1) : led.writeSync(0);

	res.send(toggleCommand); 
});

app.listen(appPort, function(){
	console.log('Listening on port: ' + appPort);
});
