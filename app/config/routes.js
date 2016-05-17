// var topics = require('./../controllers/topics.js');
// var answers = require('./../controllers/answers.js');
// var comments = require('./../controllers/comments.js')
var contacts = require('./../controllers/contacts.js')

module.exports = function(app){
	app.post('/contact_form', function(req, res){
		contacts.create(req,res)
	})
}