app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home',{
        url:'/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'

    });

    $stateProvider.state('historique', {
        url: '/home/historique',
        templateUrl: 'templates/historique.html',
        controller: 'HistoriqueController'
    });

    $stateProvider.state('notification', {
        url: '/home/historique/:id',
        templateUrl: 'templates/notification.html',
        controller: 'NotificationController'
    });

    $urlRouterProvider.otherwise('/home');

});
