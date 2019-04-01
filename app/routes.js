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
                data: ['$http', function($http) {
                    return $http.get('data/json_2.0.browse.json').then(function(response){
                        return response.data;
                    });
                }],
            }
        })
        // bgc detail page
        .state('detail', {
            url: '/detail/{bgcId}',
            component: 'mibigDetail',
            resolve: {
                bgcAnnot: ['$http', '$transition$', function($http, $transition$) {                    
                    return $http.get('data/json_2.0/' + $transition$.params().bgcId + '.json').then(function(response) {
                        return response.data;
                    })
                }],
                bgcSeq: ['$http', '$transition$', function($http, $transition$) {                    
                    return $http.get('data/json_2.0/' + $transition$.params().bgcId + '.seq.json').then(function(response) {
                        return response.data;
                    })
                }],
                seqSchema: ['$http', function($http) {                    
                    return $http.get('data/mibig_seq_schema.json').then(function(response) {
                        return response.data;
                    })
                }],
                annotSchema: ['$http', function($http) {                    
                    return $http.get('data/mibig_annot_schema.json').then(function(response) {
                        return response.data;
                    })
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