var FormView = Backbone.View.extend({
	className: 'form',

	template: _.template($('#formTpl').html()),

	events: {
		'click .btn': 'showForm',
		'click input[type=button]': 'addPerson'
	},

	initialize: function () {
		this.render();
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
		
		eventAggregator.trigger('addStd', newModel);

		newModel.save({}, {
			success: function (model) {
				console.log('ura!');
			},
			error: function () {
				console.log('error!');
			}
		});
		$('form').slideToggle(800); 
	},

	render: function () {
		this.$el.append(this.template());
		$('.container').append(this.$el);
		return this;
	}
});