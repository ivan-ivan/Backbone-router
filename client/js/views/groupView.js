var GroupView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function () {
		this.collection = new StudentsCollection();
		this.collection.on('update', this.render, this);
		this.collection.fetch({
			success: function () {
				console.log('success!');
			},
			error: function (collection, response, options) {
				console.log(options);
			}
		});
		// console.log(eventAggregator);
		// this.eventAggregator.trigger('collection:passed', this.collection);
		// setTimeout(function () {
		// 	console.log(this.collection.models);
		// }.bind(this), 40);
	},

	render: function () {
		var self = this;
		this.collection.each(function (student) {
			var studentView = new StudentView({
				model: student
			});
			self.$el.append(studentView.render().el);
		});
		$('.container').html(this.$el);
	}
});