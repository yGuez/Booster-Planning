app.factory('NotificationsService',['$http',function($http){
    var notifications = []; 
    return {
        GetNotifications: function(){ 
            return $http.get('http://foad.itechsup.fr/webservice/rest/server.php?wstoken=579d9e7703518bbe695742e8370d24a1&wsfunction=core_calendar_get_calendar_events&moodlewsrestformat=json').then(function(response){
                notifications = response.data.events;
                return response.data.events;
            });
        },
        GetNotification: function(notificationId){
            for(i=0;i<notifications.length;i++){
                if(notifications[i].id == notificationId){
                    return notifications[i];
                }
            }
        }
    }
}]);