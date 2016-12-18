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
                    views: {
                        "" : {
                            templateUrl: "app/createEvent/createEvent.html",
                            controller: "CreateEventController"
                        },
                        "type@createEvent" : {
                            templateUrl: "app/createEvent/type.html",
                            controller: "CreateEventTypeController"
                        },
                        "description@createEvent" : {
                            templateUrl: "app/createEvent/description.html",
                            controller: "CreateEventDescriptionController"
                        },
                        "time@createEvent" : {
                            templateUrl: "app/createEvent/time.html",
                            controller: "CreateEventTimeController"
                        },
                        "friends@createEvent" : {
                            templateUrl: "app/createEvent/friends.html",
                            controller: "CreateEventFriendsController"
                        }
                    }
                })
        });
}());