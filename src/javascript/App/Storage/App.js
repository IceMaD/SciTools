const APP_STORAGE = 'sci_tools.storage.app';

require('angular')
    .module(APP_STORAGE, [])
    .service('AppStorage', ['$rootScope', function ($rootScope) {
        let app = {};
        let bound_scopes = [];

        function notifyChange() {
            bound_scopes.forEach(function (bound) {
                bound.$scope[bound.field] = get();
            })
        }

        function get() {
            return angular.copy(app)
        }

        const storage = {
            setTitle: function(title) {
                app.title = angular.copy(title);

                notifyChange();

                return storage;
            },

            autoBind: function ($scope, field = 'app') {

                let scope = {$scope, field};

                $scope[field] = get();

                bound_scopes.push(scope);

                $scope.$on('$destroy', function () {
                    bound_scopes = bound_scopes.splice(bound_scopes.indexOf(scope), 1)
                })
            }
        };

        return storage;
    }]);
