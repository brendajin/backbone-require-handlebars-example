define([
	'handlebars'
], function(Handlebars){

	Handlebars.registerHelper("rating", function(rating){
		var starRating = '';
		var darkStars = rating.starRating.charAt(0);

		console.log(rating)

		if(rating.starRating.charAt(0)) {
			for (var i = rating.starRating.charAt(0); i >0; i--) {
				starRating += '<span class="icon-star3"></span>';
			}
		}

		if(rating.starRating.charAt(1) == '.') {
			starRating += '<span class="icon-star2"></span>';
			darkStars = parseInt(darkStars) + 1;
		}

		for(var i = 5-darkStars; i > 0; i--) {
			starRating += '<span class="icon-star"></span>';
		}



		return starRating + ' ('+rating.count+')';
	})	
})
