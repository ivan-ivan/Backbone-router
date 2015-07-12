var StudentView = Backbone.View.extend({
	tagName: 'li',

	className: 'list-group-item',

	template: _.template($('#studentTpl').html()),

	events: {
		'click': function () {
			eventAggregator.trigger('student:selected', this.model);
		}
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});