require('../AminoAcids');
require('angular')
    .module('sci_tools.directive.sequence_preview', [
        'sci_tools.configuration.amino_acids',
    ])

    .directive('sequencePreview', [function () {
        return {
            restrict: 'E',
            scope: {
                sequence: '=',
                match: '=',
            },
            templateUrl: 'Directive/SequencePreview.html',
            controller: ['$scope', '$element', '$sce', 'AminoAcids', function ($scope, $element, $sce, AminoAcids) {
                $element.addClass('sequence-preview');

                const color = {
                    polarity: function(aminoAcid) {
                        return aminoAcid.polarity ? 'blue' : 'red';
                    },
                    own: function (aminoAcid) {
                        return aminoAcid.color;
                    },
                    none: function () {
                        return null;
                    },
                    acidityBasicity: function (aminoAcid) {
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

                $scope.$watch('[sequence, match]', () => {
                    let parsed = $scope.sequence.replace($scope.match, `<p class="text --main-highlight --inline">${$scope.match}</p>`);

                    AminoAcids.forEach(function (aminoAcid) {
                        let regexp = new RegExp(`(${aminoAcid.oneLetterCode})`, 'g');

                        parsed = parsed.replace(regexp, `<span class="text --inline" style="color: ${color.own(aminoAcid)}">$1</span>`)
                    });

                    $scope.parsed = $sce.trustAsHtml(parsed);
                })
            }]
        }
    }]);
