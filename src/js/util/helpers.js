define([
	'handlebars'
], function(Handlebars){

	Handlebars.registerHelper("rating", function(rating){
		var starRating = '';
		var darkStars = rating.starRating.charAt(0);

		// count the dark stars
		if(rating.starRating.charAt(0)) {
			for (var i = rating.starRating.charAt(0); i >0; i--) {
				starRating += '<span class="icon-star3"></span>';
			}
		}

		// see if there should be a half star
		if(rating.starRating.charAt(1) == '.') {
			starRating += '<span class="icon-star2"></span>';

			// pretend there was one more dark star if there was a half star
			darkStars = parseInt(darkStars) + 1;
		}

		// count the rest of the blank stars
		for(var i = 5-darkStars; i > 0; i--) {
			starRating += '<span class="icon-star"></span>';
		}

		// return the string
		return starRating + ' ('+rating.count+')';
	})	
})
