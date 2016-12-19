(function(){
    angular.module("beacon")
    .controller("DashboardInboxController",["$scope", "$http", function($scope, $http){
        var events = [
            {
                createdBy: "Philip Lan",
                sentTo: ["Chris Li"],
                type: "eat",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "Eat at Norris"
            },
            {
                createdBy: "Chris Li",
                sentTo: ["Philip Lan"],
                type: "work",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "study at Norris"
            },
            {
                createdBy: "Chris Li",
                sentTo: ["Philip Lan", "Chris Li", "Eugin Lee", "Evan House", "John Doe", "Robert Jin"],
                type: "work",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "Lets go out and party or something maybe just lemme know"
            },
            {
                createdBy: "Chris Li",
                sentTo: ["Philip Lan", "Chris Li", "Eugin Lee", "Evan House", "John Doe", "Robert Jin"],
                type: "exercise",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "Lets go out and party or something maybe just lemme know"
            },
            {
                createdBy: "Chris Li",
                sentTo: ["Philip Lan", "Chris Li", "Eugin Lee", "Evan House", "John Doe", "Robert Jin"],
                type: "chill",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "Lets go out and party or something maybe just lemme know"
            },
            {
                createdBy: "Philip Lan",
                sentTo: ["Chris Li"],
                type: "eat",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "Eat at Norris"
            },
            {
                createdBy: "Chris Li",
                sentTo: ["Philip Lan"],
                type: "work",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "study at Norris"
            },
            {
                createdBy: "Chris Li",
                sentTo: ["Philip Lan", "Chris Li", "Eugin Lee", "Evan House", "John Doe", "Robert Jin"],
                type: "work",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "Lets go out and party or something maybe just lemme know"
            },
            {
                createdBy: "Chris Li",
                sentTo: ["Philip Lan", "Chris Li", "Eugin Lee", "Evan House", "John Doe", "Robert Jin"],
                type: "exercise",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "Lets go out and party or something maybe just lemme know"
            },
            {
                createdBy: "Chris Li",
                sentTo: ["Philip Lan", "Chris Li", "Eugin Lee", "Evan House", "John Doe", "Robert Jin"],
                type: "chill",
                startTime: 1482092143493,
                endTime: 1482092543493,
                description: "Lets go out and party or something maybe just lemme know"
            }
        ]
        var colors = {
            "eat": "blue",
            "work": "red",
            "exercise": "yellow",
            "chill": "green"
        };
        $scope.select = function (idx) {
            $scope.events[$scope.selected].selected = false;
            $scope.selected = idx;
            $scope.events[idx].selected = true;
        }
        $scope.events = events.map(function (data) {
            var group = data.sentTo.join(", ");
            data.group = group.length > 45 ? group.substring(0, 41) + " ..." : group;
            var descLen = data.description.length;
            data.desc = descLen > 48 ? data.description.substring(0, 44) + " ..." : data.description;
            data.pallete = colors[data.type];
            data.selected = false;
            return data;
        });
        if ($scope.events.length) {
            $scope.selected = 0;
            $scope.select(0);
        }
    }]);
}());