define([
	'handlebars'
], function(Handlebars){

	Handlebars.registerHelper("rating", function(rating){
		console.log(rating)
		return '<span>something to hold a place here</span>'
	})	
})