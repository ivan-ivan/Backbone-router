var eventAggregator= _.extend({}, Backbone.Events),
	groupController;

$(function () {
	var router = new Router();

	groupController = new GroupController();
	Backbone.history.start();

	eventAggregator.on('student:selected', function (student) {
	    var urlpath= 'student/'+ student.get('name');
	    router.navigate(urlpath, {trigger: true});
	});
});