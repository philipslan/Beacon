(function () {
    angular.module("beacon").
        controller("SignupController",["$scope", "$state", "$http", "$interval", function ($scope, $state, $http, $interval) {
            $scope.signUp = function (form) {
                if (!Object.keys(form).length === 4) {
                    alert("Complete form Please");
                    return;
                }
                $http.post("/api/user", form).success(function (user) {
                    alert("Thank you for signing up!");
                }).error(function (err) {
                    alert("User was not created");
                });
            }
    }]);
}());