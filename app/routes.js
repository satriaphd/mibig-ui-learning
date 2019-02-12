App.config(
    ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider,) {
        $stateProvider
        // 404 page
        .state('404', {
            url: '/404',
            component: 'mibig404'
        })
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
        // download page
        .state('download', {
            url: '/download',
            component: 'mibigDownload',
            resolve: {
                bundles: ['$http', function($http) {
                    return $http.get('data/bundles.json').then(function(response) {
                        return response.data;
                    })
                }]
            }
        })
        // submit page
        .state('submit', {
            url: '/submit',
            component: 'mibigSubmit'
        })
        // request page
        .state('request', {
            url: '/request',
            component: 'mibigRequest'
        })
        // not found redirect
        $urlRouterProvider.otherwise('/404');
}])