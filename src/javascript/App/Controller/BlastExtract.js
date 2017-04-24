module.exports = ['$scope', 'AppStorage', function ($scope, AppStorage) {

    $scope.$watch('blast', filter);
    $scope.$watch('query', filter);
    $scope.$watch('name', function () {
        AppStorage.setTitle($scope.name);
    });

    AppStorage.autoBind($scope);

    function filter() {
        if (!$scope.blast) {
            return;
        }

        let query = angular.copy($scope.query);

        if (!query) {
            $scope.filtered_hits = $scope.blast.iteration.hits;

            return;
        }

        const pattern = new RegExp(query.replace(/\*/g, '[A-Z]'));

        $scope.filtered_hits = $scope.blast.iteration.hits
            .filter(hit => {
                return hit.hsp.hitSequence.match(pattern);
            })
            .map(hit => {
                const matchedSequence = pattern.exec(hit.hsp.hitSequence)[0];

                return { ...hit, matchedSequence: matchedSequence }
            })
    }
}];