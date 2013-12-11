var viewPath = '../../templates/compiled/';

define([
	'jquery',
	'underscore',
	'backbone',
	viewPath + 'thumb.handlebars',
],function($,_,Backbone,templates){

	// Compile the handlebars template. This step can be done differently with grunt or other build tools.

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
	})

	var ThumbCollection = Backbone.Collection.extend({
		initialize: function(){
		}
	});

	return {
		view: ThumbView,
		collection: ThumbCollection
	}
})