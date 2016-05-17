var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	debug: true,
	logger: true,
	direct: true,
	port: 587
});

module.exports = (function(){
	return{
		create: function(req, res){
			console.log(req.body)
			transporter.sendMail({
				from: req.body.email,
				to: 'cookiesncream@ladle.net',
				subject: 'Message from ' + req.body.name,
				text: req.body.message
			});
			res.json(req.body)
		}
	}
})();