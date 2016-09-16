app.controller('HistoriqueController', ['$scope','NotificationsService',function($scope, NotificationsService){
    NotificationsService.GetNotifications().then(function(notifications){
        $scope.notifications = notifications;
    });
}]);