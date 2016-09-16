app.controller('HomeController', function($scope, $cordovaCalendar, $http, $stateParams){
   
var url ='http://foad.itechsup.fr/webservice/rest/server.php?wstoken=579d9e7703518bbe695742e8370d24a1&wsfunction=core_calendar_get_calendar_events&moodlewsrestformat=json';
    $http.get(url).then(function(response){
        
        $scope.notifications = response.data.events;
        $scope.last = response.data.events.slice(-1)[0];
        $scope.date = (response.data.events[0].timestart)*1000;
        $scope.page = $stateParams.notification;
        console.log($scope.notifications);
    });

    
   $scope.createEvent = function() {
        $cordovaCalendar.createEventInteractively({
            title: $scope.last.name,
            location: 'Itechsup',
            notes: $scope.last.description,
            startDate: new Date($scope.date),
            endDate: new Date(2016, 08, 17, 12, 0, 0, 0, 0)
        }).then(function (result) {
            console.log("Event created successfully");
            console.log($stateParams.notification);
        }, function (err) {
            console.error("There was an error: " + err);
        });
    }
});
