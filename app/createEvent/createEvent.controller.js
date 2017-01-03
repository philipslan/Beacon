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
    		"$http",
    		function($scope, createEventFactory, $location, $anchorScroll, $http){
    	var form = {};
    	$scope.friends = 
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
			$http({method: 'GET', url:'/api/whoami'}).success(function(data) {
				$scope.user = data;
				$scope.user.friends = [{id: '1', name: "Phil Lan"},
					{id: '2', name: "James Kim"},
					{id: '3', name: "Jiham Lee"},
					{id: '4', name: "James Jia"},
					{id: '5', name: "Evan House"}];
					$scope.inputForm = {};
					$scope.inputForm.friends = {};
			});
    	}
    	$scope.createEvent = function(inputForm) {
    		form = createEventFactory.appendForm(inputForm);
    		$http({method: 'POST', url: '/createEvent', data: form});
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