(function(){
    angular.module("beacon")
    .factory("createEventFactory", function($scope) {
    	var factory = {};
    	var form = {};
    	factory.getForm = function() {
    		return form;
    	};
    	factory.appendForm = function(inputForm) {
    		form = extend(form, inputForm);
    	};
    	return factory;
    })
    .controller("CreateEventController",["$scope", 'createEventFactory', function($scope, createEventFactory){
    	$scope.createEvent = function() {
    		var form = createEventFactory.getForm();
    		debugger;
    	}
    }]);
}());