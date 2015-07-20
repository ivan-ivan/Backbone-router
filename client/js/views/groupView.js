var GroupView = Backbone.View.extend({
	tagName: 'ul',

	initialize: function () {
		this.collection = new StudentsCollection();
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
		return this;
	}
});