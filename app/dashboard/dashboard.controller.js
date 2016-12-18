(function(){
    angular.module("beacon")
    .controller("DashboardController",["$scope", "$http", function($scope, $http){
        $scope.logout = function (e) {
            $http.post("/auth/logout").success(function(){
                window.location.assign("/");
            });
            e.preventDefault();
        }
    }]);
}());