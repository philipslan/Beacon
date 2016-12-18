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
                .state("createEvent", {
                    url: "/createEvent",
                    controller: "CreateEventController",
                    views: {
                        "" : {
                            templateUrl: "app/createEvent/createEvent.html"
                        },
                        "type@createEvent" : {
                            templateUrl: "app/createEvent/type.html"
                        },
                        "description@createEvent" : {
                            templateUrl: "app/createEvent/description.html"
                        },
                        "time@createEvent" : {
                            templateUrl: "app/createEvent/time.html"
                        },
                        "friends@createEvent" : {
                            templateUrl: "app/createEvent/friends.html"
                        }
                    }
                })
        });
}());