app.controller('HomeController', function($scope, $cordovaCalendar){

    
   $scope.createEvent = function() {
        $cordovaCalendar.createEventInteractively({
            title: 'Cours',
            location: 'Itechsup',
            notes: 'Installez Android',
            startDate: new Date(2016, 08, 16, 18, 30, 0, 0, 0),
            endDate: new Date(2016, 08, 17, 12, 0, 0, 0, 0)
        }).then(function (result) {
            console.log("Event created successfully");
            alert("Event created successfully");
        }, function (err) {
            console.error("There was an error: " + err);
        });
    }
});
