(function () {
    angular.module("beacon", ["ui.router"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/login");
            $stateProvider
                .state("login", {
                    url: "/login",
                    templateUrl: "app/login/login.html",
                    controller: "LoginController"
                })
                .state("signup", {
                    url: "/signup",
                    templateUrl: "app/signup/signup.html",
                    controller: "SignupController"
                });
        });
}());