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

    .directive('blastUploader', ['Parser', function (Parser) {
        return {
            restrict: 'E',
            scope: {
                blast: '=exportValueIn'
            },
            templateUrl: 'directive/blastUploader.html',
            controller: ['$scope', '$element', function ($scope, $element) {
                $element.addClass('blast-uploader');

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
