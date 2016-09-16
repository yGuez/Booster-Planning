app.controller("NotificationController",['$scope','$stateParams','NotificationsService',function($scope,$stateParams,NotificationsService){
    var notificationId = $stateParams.id;
    $scope.notification = NotificationsService.GetNotification(notificationId);
}]);