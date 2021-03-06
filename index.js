//Imports
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');

//Application Init
const app = express();

let port = process.env.PORT;
if(port == null || port == "") {
	port = 9090;
}

app.engine('hbs', exphbs({
	extname: 'hbs',
	defaultView: 'main',
	layoutsDir: path.join(__dirname, '/views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials'),

	//Helpers
	helpers: {
		cap: function(text) { return text.toUpperCase(); },
		em: function(text) {
			var x = `<em>${text}</em>`;

			return new handlebars.SafeString(x);
		}
	}
}));

//HBS Init
app.set('view engine', 'hbs');

//Home Route
app.get('/', function(req, res) {
	res.render('home', {
		title: 'Families',
		families: [
			{
				image: 'bernal.jpg',
				name: 'Bernal',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'bernal'
			},
			{
				image: 'cajita.jpg',
				name: 'Cajita',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'cajita'
			},
			{
				image: 'chua.jpg',
				name: 'Chua',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'chua'
			},
			{
				image: 'collantes.jpg',
				name: 'Collantes',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'collantes'
			},
			{
				image: 'contemprato.jpg',
				name: 'Contemprato',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'contemprato'
			},
			{
				image: 'darvin.jpg',
				name: 'Darvin',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'darvin'
			},
			{
				image: 'guce.jpg',
				name: 'Guce',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'guce'
			},
			{
				image: 'hilomen.jpg',
				name: 'Hilomen',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'hilomen'
			},
			{
				image: 'lo.jpg',
				name: 'Lo',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'lo'
			},
			{
				image: 'lopez.jpg',
				name: 'Lopez',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'lopez'
			},
			{
				image: 'unknown.jpg',
				name: 'Manguerra',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'manguerra'
			},
			{
				image: 'unknown.jpg',
				name: 'Mauricio',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'mauricio'
			},
			{
				image: 'miranda.jpg',
				name: 'Miranda',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'miranda'
			},
			{
				image: 'nanawa.jpg',
				name: 'Nanawa',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'nanawa'
			},
			{
				image: 'san.jpg',
				name: 'San Juan',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'sanjuan'
			},
			{
				image: 'villanueva.jpg',
				name: 'Villanueva',
				description: 'Lorem ipsum dolor sit amet,',
				link: 'villanueva'
			},
		],
	})
});

app.get('/instructions', function(req,res){
	res.render('instructions', {
		title: 'Instructions'
	});
});

app.get('/create', function(req,res){
	res.render('create', {
		title: 'Create'
	});
});


app.get('/darvin', function(req,res){
	res.render('darvin', {
		title: 'Darvin'
	});
});

app.get('/chua', function(req,res){
	res.render('chua', {
		title: 'Chua'
	});
});

app.get('/cajita', function(req,res){
	res.render('cajita', {
		title: 'Cajita'
	});
});


app.get('/bernal', function(req,res){
	res.render('bernal', {
		title: 'Bernal'
	});
});

app.get('/collantes', function(req,res){
	res.render('collantes', {
		title: 'Collantes'
	});
});

//Gian is coding here
app.get('/contemprato', function(req,res){
	res.render('contemprato', {
		title: 'Contemprato'
	});
});

app.get('/guce', function(req,res){
	res.render('guce', {
		title: 'Guce'
	});
});

app.get('/mauricio', function(req,res){
	res.render('mauricio', {
		title: 'Mauricio'
	});
});

app.get('/hilomen', function(req,res){
	res.render('hilomen', {
		title: 'Hilomen'
	});
});

app.get('/lo', function(req,res){
	res.render('lo', {
		title: 'Lo'
	});
});

app.get('/lopez', function(req,res){
	res.render('lopez', {
		title: 'Lopez'
	});
});


app.get('/miranda', function(req,res){
	res.render('miranda', {
		title: 'Miranda'
	});
});

app.get('/manguerra', function(req,res){
	res.render('manguerra', {
		title: 'Manguerra'
	});
});

app.get('/nanawa', function(req,res){
	res.render('nanawa', {
		title: 'Nanawa'
	});
});

app.get('/villanueva', function(req,res){
	res.render('villanueva', {
		title: 'Villanueva'
	});
});

app.get('/sanjuan', function(req,res){
	res.render('sanjuan', {
		title: 'San Juan'
	});
});

app.listen(port, function() {
	console.log('App listening at port ' + port)
})

//Create Static URL
app.use(express.static('public'));
