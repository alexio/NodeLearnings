var express = require('express');
var app = express();
var React = require('react');

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({
	transformViews: false
}));

require('babel/register')({
	ignore: false
});

var firstDetail = process.argv[3] || "Shopping things";
var secondDetail = process.argv[4] || "1:00 PM";
var data = [
	{
		title: "Shopping",
		detail: firstDetail
	},
	{
		title: "Hair cut",
		detail: secondDetail
	}
];
app.use('/', function(req, res) {
	res.render('index', {
		data: data
	});
});

app.listen(app.get('port'), function() {});