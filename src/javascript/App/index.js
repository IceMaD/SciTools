let angular = require('angular');

require('ng-file-upload');
require('./Routing');
require('./Directive/BlastUploader');
require('./Directive/Hit');
require('angular-utils-pagination');

angular
    .module('sci_tools.app', [
        'sci_tools.routing',
        'sci_tools.directive.blast_uploader',
        'sci_tools.directive.hit',
        'ngFileUpload',
        'angularUtils.directives.dirPagination'
    ]);
