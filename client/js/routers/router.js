var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'student/:name': 'viewStudent'
	},

	index: function () {
		groupController.start();
	},

	viewStudent: function (name) {
		var students = new StudentsCollection();
		students.fetch({
			success: function (data) {
				var selectedStudent = data.find(function (student) {
					return student.get('name') === name;
				});

				if ($('.container ul').length > 1) {
					$('.container > ul').next().remove();	
				}

				$('.container').append((new RouterView({ model : selectedStudent})).render().el);
			}
		});
	}
});
