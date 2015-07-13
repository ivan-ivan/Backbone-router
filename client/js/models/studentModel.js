var StudentModel = Backbone.Model.extend({
	defaults: {
		name: 'Volodya',
		lastName: 'Peterson',
		age: 22,
		gender: 'male'
	},

	urlRoot: '/students.json'
});