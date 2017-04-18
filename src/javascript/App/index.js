let angular = require('angular');

require('ng-file-upload');
require('./../Config');
require('./Service/Parser');

angular
    .module('App', [
        'Config',
        'tools.service.parser',
        'ngFileUpload'
    ])

    .directive('blastUpload', ['Parser', function (Parser) {
        return {
            restrict: 'E',
            scope: {
                blast: '=exportValueIn'
            },
            templateUrl: 'directive/blastUpload.html',
            controller: ['$scope', function ($scope) {

                $scope.loading = false;

                $scope.$watch('file', function (file) {
                    if (!file) {
                        return
                    }

                    $scope.loading = true;

                    Parser.parse(file).then(function (blast) {
                        $scope.blast = blast;
                        $scope.loading = false;
                    })
                });
            }]
        }
    }]);
