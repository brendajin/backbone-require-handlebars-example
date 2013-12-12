// just your regular old fake data

define([],function(){
	var thumbs = 
	[{
		name:"Cutest dog ever",
		description:"This puppy is so cute, she makes toddlers throw fits",
		src:"http://lorempixel.com/400/300/animals/",
		rating:{
			"starRating":"3.5",
			"count": "5"
		},
		price:{
			"sale":"$100,000",
			"regular":"$100,000,000"
		}
	},
	{
		name:"My sweet kitten",
		description:"This kitten might give you the sniffles, but she's worth it",
		src:"http://lorempixel.com/400/300/cats/",
		rating:{
			"starRating":"2.5",
			"count": "14"
		},
		price:{
			"sale":"$10,000",
			"regular":"$100,000"
		}
	},
	{
		name:"Pork",
		description:"It's what's for breakfast",
		src:"http://lorempixel.com/400/300/food/",
		rating:{
			"starRating":"5",
			"count": "500"
		},
		price:{
			"regular":"$10"
		}
	},
	{
		name:"Sports",
		description:"It's what's after breakfast",
		src:"http://lorempixel.com/400/300/sports/",
		rating:{
			"starRating":"1",
			"count": "0"
		}
	}]

	return thumbs;
})