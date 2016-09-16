app.controller('HomeController', ['$scope', '$cordovaCalendar','NotificationsService',function($scope, $cordovaCalendar, NotificationsService){
    NotificationsService.GetNotifications().then(function(notifications){
        $scope.notifications = notifications;
      return notifications;
    }).then(function(notifs){
      console.log(notifs);
      for(var i in notifs) {
        console.log(notifs[i]);
        $scope.createEvent = function () {
          $cordovaCalendar.createEventInteractively({
            title: notifs[i].name,
            location: 'Itechsup',
            notes: notifs[i].description,
            startDate: new Date((notifs[i].timestart) * 1000),
            endDate: new Date(((notifs[i].timestart) * 1000) + ((notifs[i].timeduration) * 1000))
          })
        }
      }
    }).then(function (result) {
            console.log("Event created successfully");
            //console.log($stateParams.notification);
        }, function (err) {
            console.error("There was an error: " + err);
        });
}]);
