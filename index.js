const express = require('express')

const app = express()

const port = 9090

app.use(express.static('imgs'))
app.use('/user', express.static('imgs'))

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/home.html')
})

app.get('/home(page)?(.html)?', function(req, res) {
	res.sendFile(__dirname + '/home.html')
})

app.get('/profile(.html)?', function(req, res) {
	res.sendFile(__dirname + '/profile.html')
})

app.get('/user/:username', function(req, res) {
	res.sendFile(__dirname + '/profile.html')
})

app.get('/user/:userId(\d+)', function(req, res) {
	response.send('user #' + req.params.userId)

	res.sendFile(__dirname + '/profile.html')
})

app.listen(port, function() {
	console.log('App listening at port ' + port)
})