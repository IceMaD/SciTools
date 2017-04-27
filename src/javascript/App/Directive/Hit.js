require('angular')
    .module('sci_tools.directive.hit', [])
    .directive('hit', [function () {

        const FileSaver = require('file-saver');

        function getFasta(hit) {
            let sequence = hit.hsp.hitSequence.match(/.{1,80}/g).join(`\n`);

            return `>${hit.id} @${hit.accession}\n${sequence}`;
        }

        return {
            restrict: 'E',
            scope: {
                hit: '=value'
            },
            templateUrl: 'Directive/Hit.html',
            controller: ['$scope', '$element', function ($scope, $element) {
                $element.addClass('hit');

                $scope.download = function() {
                    let file = new File(
                        [getFasta($scope.hit)],
                        `${$scope.hit.accession}.fasta`,
                        {type: "text/plain;charset=utf-8"}
                    );

                    FileSaver.saveAs(file)
                }
            }]
        }
    }]);
