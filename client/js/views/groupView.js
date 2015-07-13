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
	},

	render: function () {
		var self = this;
		this.collection.each(function (student) {
			var studentView = new StudentView({
				model: student
			});
			self.$el.append(studentView.render().el);
		});
		$('.container').append(this.$el);
	}
});