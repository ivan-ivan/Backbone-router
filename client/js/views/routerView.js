var RouterView = Backbone.View.extend({
	tagName: 'ul',
	
	render: function () {
		var self = this;

		_.each(this.model.toJSON(), function (value) {
			self.$el.append('<li class="list-group-item">' + value + '</li>');
		});

		return this;
	}
});