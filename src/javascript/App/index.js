let angular = require('angular');

require('angular-utils-pagination');
require('ngstorage');
require('ng-file-upload');
require('./Routing');
require('./Directive/BlastUploader');
require('./Directive/Hit');
require('./Directive/SequencePreview');
require('./Directive/Dropdown');
require('./Storage/App');

angular
    .module('sci_tools.app', [
        'sci_tools.routing',
        'sci_tools.directive.blast_uploader',
        'sci_tools.directive.hit',
        'sci_tools.directive.sequence_preview',
        'sci_tools.directive.dropdown',
        'ngFileUpload',
        'ngStorage',
        'angularUtils.directives.dirPagination',
        'sci_tools.storage.app',
    ])

    .controller('AppController', ['$scope', 'AppStorage', ($scope, AppStorage) =>{
        AppStorage.autoBind($scope, 'app')
    }])

    .config(['$localStorageProvider', $localStorageProvider => {
        $localStorageProvider.setKeyPrefix('SciTools-');
    }])
;
