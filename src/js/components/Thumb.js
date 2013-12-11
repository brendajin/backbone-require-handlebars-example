var viewPath = '../../templates/compiled/';

define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	viewPath + 'thumb.handlebars'
],function($,_,Backbone,Handlebars,template){

	// Compile the handlebars template. This step can be done differently with grunt or other build tools.

	var ThumbView = Backbone.View.extend({
		initialize: function() {
			var self = this;
			self.collection.on('add', self.render, self);
		},
		render: function() {
			var self = this;
			self.$el.html('');
			for(var i = 0; i < self.collection.models.length; i++) {
				self.$el.append(templates.thumb(self.collection.models[i].attributes));
				self.swipe(self.collection.models[i].id)
			}
		},
	})

	var ThumbModel = Backbone.Model.extend({
		render: function(){
			self.$el.append(template.thumb(this.attributes));
		}
	});

	var ThumbCollection = Backbone.Collection.extend({
		initialize: function(){
			console.log('collection initialized', this)
		},
		parse: function(response, options){
			console.log(response, options);
		}
	});

	return {
		view: ThumbView,
		model: ThumbModel,
		collection: ThumbCollection
	}
})