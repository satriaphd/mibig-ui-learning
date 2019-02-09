App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('start', {
        url: '/',
        component: 'mibigStart',
        resolve: {
            version: function() {
                return '1.4';
            },
            totalBGC: function() {
                return 1480;
            }
        }
    })
    ;
    
    $urlRouterProvider.otherwise('/');
}])