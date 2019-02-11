App.config(
    ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider,) {
        $stateProvider
        // start page
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
        // browse page
        .state('browse', {
            url: '/browse',
            component: 'mibigBrowse',
            resolve: {
                bgcData: ['$http', function($http) {
                    return $http.get('data/mibig_v1_4.json').then(function(response){
                        return response.data;
                    });
                }],
            }
        })
        ;
        
        $urlRouterProvider.otherwise('/');
}])