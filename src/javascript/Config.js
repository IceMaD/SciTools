require('angular')
    .module('Config', [])
    .config(['$interpolateProvider', '$httpProvider', '$locationProvider', function ($interpolateProvider, $httpProvider, $locationProvider) {

        /**
         * Config to work with Symfony 2
         */
        $interpolateProvider.startSymbol('{[').endSymbol(']}');
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

        $locationProvider.html5Mode(true);
    }]);
