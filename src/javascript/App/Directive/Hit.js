require('angular')
    .module('sci_tools.directive.hit', [])

    .directive('hit', [function () {
        return {
            restrict: 'E',
            scope: {
                hit: '=value'
            },
            templateUrl: 'Directive/Hit.html',
            controller: ['$scope', '$element', function ($scope, $element) {
                $element.addClass('hit');
            }]
        }
    }]);
