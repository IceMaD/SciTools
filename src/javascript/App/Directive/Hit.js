require('angular')
    .module('sci_tools.directive.hit', [

    ])
    .directive('hit', ['$http', '$q', function ($http, $q) {

        const FileSaver = require('file-saver');

        function getFasta(hit) {
            const deferred = $q.defer();

            $http.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=protein&id=${hit.uid}&rettype=fasta&retmode=text`).then(
                function (response) {
                    deferred.resolve(response.data)
                }
            );

            return deferred.promise;
        }

        const X2JS = require('x2js');
        const xmlParser = new X2JS();

        // $http.get(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=protein&id=497544756&rettype=native&retmode=xml`).then(
        //     function (response) {
        //         console.log(xmlParser.xml2js(response.data));
        //     }
        // );

        return {
            restrict: 'E',
            scope: {
                hit: '=value'
            },
            templateUrl: 'Directive/Hit.html',
            controller: ['$scope', '$element', function ($scope, $element) {
                $element.addClass('hit');

                $scope.download = function() {

                    getFasta($scope.hit).then(function (fasta) {
                        let file = new File(
                            [fasta],
                            `${$scope.hit.accession}.fasta`,
                            {type: "text/plain;charset=utf-8"}
                        );

                        FileSaver.saveAs(file)
                    })
                }
            }]
        }
    }]);
