(function () {
    angular.module("beacon", ["ui.router"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/dashboard");
            $stateProvider
                .state("dashboard", {
                    url: "/dashboard",
                    templateUrl: "app/dashboard/dashboard.html",
                    controller: "DashboardController"
                })
        });
}());