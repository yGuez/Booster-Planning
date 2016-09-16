app.controller('HomeController', ['$scope', '$cordovaCalendar','NotificationsService',function($scope, $cordovaCalendar, NotificationsService){
    NotificationsService.GetNotifications().then(function(notifications){
        $scope.notifications = notifications;
    });


    $scope.createEvent = function() {
        $cordovaCalendar.createEventInteractively({
            title:  $scope.notifications[1].name,
            location: 'Itechsup',
            notes:  $scope.notifications[1].description,
            startDate: new Date($scope.notifications.timestart*1000),
            endDate: new Date(2016, 08, 17, 12, 0, 0, 0, 0)
        }).then(function (result) {
            console.log("Event created successfully");
            console.log($stateParams.notification);
        }, function (err) {
            console.error("There was an error: " + err);
        });

    }
}]);
