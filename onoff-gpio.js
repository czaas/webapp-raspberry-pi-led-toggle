"use strict"

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var Gpio = require('onoff').Gpio;
var led = new Gpio(14, 'out');

var appPort = 9999;

function toggleOn(){
	led.writeSync(1);
}
function toggleOff(){
	led.writeSync(0);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/led', function(req, res){
	var toggleCommand = req.body.command;
	console.log(req.body);
	(toggleCommand === 'on') ? toggleOn() : toggleOff();

	res.send('toggled'); 
});

app.listen(appPort, function(){
	console.log('Listening on port: ' + appPort);
});
