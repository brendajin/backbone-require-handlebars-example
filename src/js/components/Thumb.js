var viewPath = '../../templates/compiled/';

define([
	'jquery',
	'underscore',
	'backbone',
	viewPath + 'thumb.handlebars',
],function($,_,Backbone,templates){

	// define a view that renders once it is initialized
	var ThumbView = Backbone.View.extend({
		initialize: function() {
			var self = this;
			self.render();
		},
		render: function() {
			var self = this;
			console.log(self.collection.toJSON())
			self.$el.append(templates.thumb(self.collection.toJSON()))
			return self;
		},
		events: {
			'click img':'onClick'
		},
		onClick: function(e){
			alert('Surprise! You clicked on "'+$(e.target).attr('alt')+'"!');
		}
	})

	// define a collection
	// later on, this can have much more detailed functionality, like .fetch() and .parse()
	// later on, this collection may also be able to udpate itself, emit events, and listen for events from other collections
	var ThumbCollection = Backbone.Collection.extend();

	return {
		view: ThumbView,
		collection: ThumbCollection
	}
})