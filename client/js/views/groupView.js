var GroupView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function () {
		this.collection = new StudentsCollection();
		// this.collection.on('update', this.render, this);
		// this.collection.on('reset', this.render, this);
		this.collection.fetch({
			success: function () {
				console.log('success!');
			},
			error: function (collection, response, options) {
				console.log(options);
			}
		});
		this.collection.on('add', this.addStudentView, this);
	},

	addStudentView: function (student) {
		var studentView = new StudentView({
			model: student
		});
		this.$el.append(studentView.render().el);
		$('.container').append(this.$el);
	},

	render: function () {
		// this.$el.empty();
		// var self = this;

		// this.collection.each(function (student) {
		// 	var studentView = new StudentView({
		// 		model: student
		// 	});
		// 	self.$el.append(studentView.render().el);
		// });
		// $('.container').append(this.$el);
		return this;
	}
});