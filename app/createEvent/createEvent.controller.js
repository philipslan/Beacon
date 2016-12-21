(function(){
    angular.module("beacon")
    .factory("createEventFactory", function() {
    	var factory = {};
    	var form = {};

    	factory.appendForm = function(inputForm) {
    		for (i in inputForm) {
    			form[i] = inputForm[i]
    		}
    		return form;
    	};
    	return factory;
    })
    .controller("CreateEventController",
    		["$scope", 
    		"createEventFactory", 
    		"$location", 
    		"$anchorScroll", 
    		function($scope, createEventFactory, $location, $anchorScroll){
    	var form = {};
    	$scope.init = function() {
    		var url = $location.url().toString().split('#');
    		var object;
    		if (url.length != 1) { 
				object = $('#' +url[url.length - 1]);
			}
			if (object == null || object.length != 1) {
				object = $('#type')	
			}
			object.addClass('active in');

    	}
    	$scope.createEvent = function(inputForm) {
    		form = createEventFactory.appendForm(inputForm);
    	};
    	$scope.addField =  function(inputForm) {
    		form = createEventFactory.appendForm(inputForm);
    	};
    	$scope.addType = function(inputForm) {
    		if (!inputForm) return;
    		form = createEventFactory.appendForm(inputForm);
    		$scope.changeTab('type','description');
    	};
    	$scope.addDescription = function(inputForm) {
    		if (!inputForm) return;
    		form = createEventFactory.appendForm(inputForm);
    		$scope.changeTab('description','time');
    	};
    	$scope.addTime = function(inputForm) {
    		if (!inputForm) return;
    		form = createEventFactory.appendForm(inputForm);
    		$scope.changeTab('time','friends');
    	};
    	$scope.changeTab = function(current, next) {
    		$('#' + current).removeClass('active in')
    		$('#' + next).addClass('active in');	
    	};
    }]);
}());