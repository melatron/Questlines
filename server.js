var express = require('express'),
	mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
var PORT = 3030;

var app = express();

mongoose.connect('mongodb://localhost/quests');
var db = mongoose.connection;

db.once('open',function(err){
	if(err){
		console.log('Cant even run DB');
		console.log(err);
		return;
	}
	console.log('Database running :)');
})

db.on('error',function(err){
	console.log(err)
})

app.set('view engine','jade');
app.set('views',__dirname + '/server/views');

app.use(express.static(__dirname+'/public'));

app.get('*',function(req,res){
	res.render('index')
});

app.listen(PORT);
console.log('Server running on port '+PORT);