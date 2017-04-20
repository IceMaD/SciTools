require('angular')
    .module('sci_tools.directive.sequence_preview', [])

    .directive('sequencePreview', [function () {
        return {
            restrict: 'E',
            scope: {
                sequence: '=',
                match: '=',
            },
            templateUrl: 'Directive/SequencePreview.html',
            controller: ['$scope', '$element', '$sce', function ($scope, $element, $sce) {
                $element.addClass('sequence-preview');

                $scope.$watch('[sequence, match]', () => {
                    $scope.parsed = $sce.trustAsHtml(
                        $scope.sequence.replace($scope.match, `<p class="text --main --inline">${$scope.match}</p>`)
                    );
                })
            }]
        }
    }]);
