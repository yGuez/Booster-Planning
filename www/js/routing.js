app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home',{
        url:'/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'

    });

    $stateProvider.state('historique', {
        url: '/home/historique',
        templateUrl: 'templates/historique.html',
        controller: 'HomeController'
    });

    $stateProvider.state('notification', {
        url: '/home/historique/:notification',
        templateUrl: 'templates/notification.html',
        controller: 'HomeController'
    });

    $urlRouterProvider.otherwise('/home');

});
