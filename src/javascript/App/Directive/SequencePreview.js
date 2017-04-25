const NONE = 'none';
const AMINO_ACID = 'amino_acid';
const ACID_BASIC = 'acid_basic';
const POLARITY = 'polarity';

const functions = {
    [POLARITY]: function(aminoAcid) {
        return aminoAcid.polarity ? 'blue' : 'red';
    },
    [AMINO_ACID]: function (aminoAcid) {
        return aminoAcid.color;
    },
    [NONE]: function () {
        return null;
    },
    [ACID_BASIC]: function (aminoAcid) {
        switch (aminoAcid.acidityBasicity) {
            case 1:
                return 'red';
            case -1:
                return 'blue';
            case 0:
            default:
                return 'green';
        }
    }
};

require('../AminoAcids');
require('angular')
    .module('sci_tools.directive.sequence_preview', [
        'sci_tools.configuration.amino_acids',
    ])

    .service('SequenceColorStorage', [function () {
        let bound_scopes = [];
        let colors = {
            options: [
                {label: 'None', value: NONE},
                {label: 'Amino acid', value: AMINO_ACID},
                {label: 'Acid/Basic', value: ACID_BASIC},
                {label: 'Polarity', value: POLARITY},
            ]
        };
        colors.current = angular.copy(colors.options[0]);

        function notifyChange() {
            bound_scopes.forEach(function (bound) {
                bound.$scope[bound.field] = get();
            })
        }

        function get() {
            return angular.copy(colors)
        }

        const storage = {
            setCurrent: function(color) {
                colors.current = angular.copy(color);

                notifyChange();

                return storage;
            },

            autoBind: function ($scope, field = 'colors') {

                let scope = {$scope, field};

                $scope[field] = get();

                bound_scopes.push(scope);

                $scope.$on('$destroy', function () {
                    bound_scopes = bound_scopes.splice(bound_scopes.indexOf(scope), 1)
                })
            }
        };

        return storage;
    }])

    .directive('sequencePreview', ['SequenceColorStorage', function (SequenceColorStorage) {
        return {
            restrict: 'E',
            scope: {
                sequence: '=',
                match: '=',
            },
            templateUrl: 'Directive/SequencePreview.html',
            controller: ['$scope', '$element', '$sce', 'AminoAcids', function ($scope, $element, $sce, AminoAcids) {
                $element.addClass('sequence-preview');

                SequenceColorStorage.autoBind($scope);

                $scope.$watch('[sequence, match, colors.current]', () => {
                    const color_function = functions[$scope.colors.current.value];
                    let parsed = $scope.sequence.replace($scope.match, `<p class="text --main-highlight --inline --monospaced">${$scope.match}</p>`);

                    AminoAcids.forEach(function (aminoAcid) {
                        let regexp = new RegExp(`(${aminoAcid.oneLetterCode})`, 'g');

                        parsed = parsed.replace(regexp, `<span class="text --inline --monospaced" style="color: ${color_function(aminoAcid)}">$1</span>`)
                    });

                    $scope.parsed = $sce.trustAsHtml(parsed);
                })
            }]
        }
    }]);
