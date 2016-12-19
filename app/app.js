(function () {
    angular.module("beacon", ["ui.router"])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/dashboard");
            $stateProvider
                .state("dashboard", {
                    url: "/dashboard",
                    views: {
                        "" : {
                            templateUrl: "app/dashboard/dashboard.html",
                            controller: "DashboardController"
                        },
                        "inbox@dashboard" : {
                            templateUrl: "app/dashboard/inbox.html",
                            controller: "DashboardInboxController"
                        }
                    }
                })
                .state("createEvent", {
                    url: "/createEvent",
                    views: {
                        "" : {
                            templateUrl: "app/createEvent/createEvent.html",
                            controller: "CreateEventController"
                        },
                        "type@createEvent" : {
                            templateUrl: "app/createEvent/type.html",
                            controller: "CreateEventController"
                        },
                        "description@createEvent" : {
                            templateUrl: "app/createEvent/description.html",
                            controller: "CreateEventController"
                        },
                        "time@createEvent" : {
                            templateUrl: "app/createEvent/time.html",
                            controller: "CreateEventController"
                        },
                        "friends@createEvent" : {
                            templateUrl: "app/createEvent/friends.html",
                            controller: "CreateEventController"
                        }
                    }
                })
        });
}());