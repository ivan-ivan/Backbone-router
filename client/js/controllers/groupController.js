function GroupController () {
	// var mediator = _.clone(Backbone.Events);

	var groupView;
	
	this.start = function () {
		groupView = new GroupView();
		var formView = new FormView();
	};

	eventAggregator.on('addStd', f)

	function f (model)  {
		groupView.collection.add(model)
	}
}