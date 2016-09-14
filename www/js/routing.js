app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home',{
        url:'/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'

    });
    
     $stateProvider.state('historique',{
        url:'/historique',
        templateUrl: 'templates/historique.html'
       

    });

     $stateProvider.state('notification',{
        url:'/notification',
        templateUrl: 'templates/notification.html'
       

    });

    $urlRouterProvider.otherwise('/home');

});
