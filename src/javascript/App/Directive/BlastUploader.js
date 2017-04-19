require('../Service/Parser');
require('angular')
    .module('sci_tools.directive.blast_uploader', [
        'sci_tools.service.parser',
    ])

    .directive('blastUploader', ['Parser', function (Parser) {
        return {
            restrict: 'E',
            scope: {
                blast: '=exportValueIn'
            },
            templateUrl: 'Directive/BlastUploader.html',
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
