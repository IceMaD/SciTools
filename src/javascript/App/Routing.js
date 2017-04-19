require('angular-ui-router');
require('angular-ui-router.statehelper');
require('angular')
    .module('sci_tools.routing', [
        'ui.router.stateHelper',
        'ui.router',
    ])

    .config(['stateHelperProvider', '$urlRouterProvider', function (stateHelperProvider, $urlRouterProvider) {
        stateHelperProvider
            .state({
                name: 'blast_extract',
                url: '/blast-extract',
                templateUrl: 'Page/BlastExtract.html',
                controller: require('./Controller/BlastExtractController'),
            });

        /**
         * Handle Angular "404"
         */
        $urlRouterProvider.otherwise(function ($injector) {
            $injector.get('$state').go('blast_extract');
        });
    }]);
