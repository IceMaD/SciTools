require('angular')
    .module('sci_tools.directive.dropdown', [])

    .directive('dropdown', [function () {
        return {
            restrict: 'E',
            scope: {
                icon: '@',
                choices: '=',
                current_choice: '=exportChoiceIn'
            },
            templateUrl: 'Directive/Dropdown.html',
            controller: ['$scope', '$element', function ($scope, $element) {
                $element.addClass('dropdown');

                $scope.close = function () {
                    $scope.opened = false;

                    return $scope;
                };

                $scope.open = function () {
                    $scope.opened = true;

                    return $scope;
                };

                $scope.pick = function(choice) {
                    $scope.current_choice = choice;

                    return $scope;
                }
            }]
        }
    }]);
