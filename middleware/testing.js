module.exports = function(req,res,next) {

	console.log('this is a middleware for article');
	next();

}