require('../Adapter/Blast');
require('angular')
    .module('sci_tools.service.parser', [
        'sci_tools.adapter.blast',
    ])
    .factory('Parser', ['$q', 'BlastAdapter', function ($q, BlastAdapter) {

        const X2JS = require('x2js');
        const xmlParser = new X2JS();

        function parse(file) {
            const deferred = $q.defer();
            const reader = new FileReader();

            reader.onload = event => {
                let rawBlast = xmlParser.xml2js(event.target.result);

                const blast = BlastAdapter.fromRawToBlast(rawBlast);

                deferred.resolve(blast)
            };

            reader.readAsText(file, "UTF-8");

            return deferred.promise;
        }


        return {parse}
    }]);
