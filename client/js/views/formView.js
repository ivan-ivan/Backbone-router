var FormView = Backbone.View.extend({
	className: 'form',

	template: _.template($('#formTpl').html()),

	events: {
		'click .btn': 'showForm',
		'click input[type=button]': 'addPerson'
	},

	showForm: function () {
		$('form').slideToggle(800);
	},

	addPerson: function () {
		var newPerson = {};

		$.each($('input[type=text]'), function (i, el) {
			newPerson[$(el).attr('name')] = $(el).val();
		});

		var newModel = new StudentModel(newPerson);
		newModel.save({}, {
			success: function () {
				console.log('ura!');
			},
			error: function () {
				console.log('shit!');
			}
		});
		console.dir(newPerson);
		$('form').slideToggle(800);//nice feature, but may be deleted
	},

	initialize: function () {
		// this.collection = new StudentsCollection();
		// this.collection.save();
		this.render();
	},

	render: function () {
		this.$el.append(this.template());
		$('.container').append(this.$el);
		return this;
	}
});