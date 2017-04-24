let angular = require('angular');

require('ng-file-upload');
require('./Routing');
require('./Directive/BlastUploader');
require('./Directive/Hit');
require('./Directive/SequencePreview');
require('./Storage/App');
require('angular-utils-pagination');

angular
    .module('sci_tools.app', [
        'sci_tools.routing',
        'sci_tools.directive.blast_uploader',
        'sci_tools.directive.hit',
        'sci_tools.directive.sequence_preview',
        'ngFileUpload',
        'angularUtils.directives.dirPagination',
        'sci_tools.storage.app',
    ])

    .controller('AppController', ['$scope', 'AppStorage', function ($scope, AppStorage) {
        AppStorage.autoBind($scope, 'app')
    }])
;
