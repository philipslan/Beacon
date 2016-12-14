(function () {
    angular.module("beacon", ["ui.router"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("login", {
                    url: "/",
                    templateUrl: "app/login/login.html",
                    controller: "LoginController"
                });
        });
}());