require('angular')
    .module('sci_tools.adapter.blast', [])
    .factory('BlastAdapter', [function () {

        function fromRawToBlast(sourceBlast) {

            let output = sourceBlast['BlastOutput'];
            let parameters = output['BlastOutput_param']['Parameters'];
            let iteration = output['BlastOutput_iterations']['Iteration'];
            let hits = iteration['Iteration_hits']['Hit'];

            return {
                program: output['BlastOutput_program'],
                version: output['BlastOutput_version'],
                reference: output['BlastOutput_reference'],
                database: output['BlastOutput_db'],
                query: {
                    id: output['BlastOutput_query-ID'],
                    definition: output['BlastOutput_query-def'],
                    length: output['BlastOutput_query-len'],
                },
                parameters: {
                    matrix: parameters['Parameters_matrix'],
                    expect: parameters['Parameters_expect'],
                    gap: {
                        open: parameters['Parameters_gap-open'],
                        extend: parameters['Parameters_gap-extend'],
                    }
                },
                iteration: {
                    number: iteration['Iteration_iter-num'],
                    query: {
                        id: iteration['Iteration_query-ID'],
                        definition: iteration['Iteration_query-def'],
                        length: iteration['Iteration_query-len'],
                    },
                    hits: hits.map(function (hit) {
                        let hsp = hit['Hit_hsps']['Hsp'];

                        return {
                            accession: hit['Hit_accession'],
                            definition: hit['Hit_def'],
                            hsp: {
                                number: hsp['Hsp_num'],
                                bitScore: hsp['Hsp_bit-score'],
                                score: hsp['Hsp_score'],
                                evalue: hsp['Hsp_evalue'],
                                query: {
                                    frame: hsp['Hsp_query-frame'],
                                    from: hsp['Hsp_query-from'],
                                    to: hsp['Hsp_query-to'],
                                },
                                hit: {
                                    frame: hsp['Hsp_hit-frame'],
                                    from: hsp['Hsp_hit-from'],
                                    to: hsp['Hsp_hit-to'],
                                },
                                identity: hsp['Hsp_identity'],
                                positive: hsp['Hsp_positive'],
                                gaps: hsp['Hsp_gaps'],
                                alignmentLeft: hsp['Hsp_align-len'],
                                querySequence: hsp['Hsp_qseq'],
                                hitSequence: hsp['Hsp_hseq'],
                                midline: hsp['Hsp_midline'],
                            },
                        };
                    })
                }
            };
        }

        return {fromRawToBlast}
    }]);
